"use strict";

const APPLE_COLOR = [239, 71, 111];
const BG_COLOR = [7, 59, 76];
const DEAD_COLOR = [255, 209, 102];
const SNAKE_COLOR = [6, 215, 160];
const WALL_COLOR = [17, 138, 178];

const game = new Smolpxl.Game();
game.sendPopularityStats();
game.showSmolpxlBar();
game.showControlsLeft(["MENU", "SELECT"]);
game.showControlsMiddle(["ARROWS"]);
game.setSourceCodeUrl(
    "https://gitlab.com/smolpxl/smolpxl/-/blob/master/public/snake/game.js"
);
game.setSize(20, 20);
game.setBorderColor(Smolpxl.colors.WHITE);
game.setBackgroundColor(BG_COLOR);
game.setTitle("Smolpxl Snake");
/*game.setMenu([
    {"text": "Continue", "fn": () => worldSettings.menuOff()},
    {"text": "Item 1", "items": [
        {"text": "Back", "fn": () => worldSettings.menuOut()}
    ]},
    {"text": "Item 2", "items": [
        {"text": "Back", "fn": () => worldSettings.menuOut()},
        {"text": "Item 2.1", "fn": () => alert("2.1")},
        {"text": "Item 2.2", "fn": () => alert("2.2")},
        {"text": "Item 2.3", "fn": () => alert("2.3")}
    ]},
    {"text": "Item 3 Close and very very very long", "fn": () => {
        alert("3");
        worldSettings.menuOff();
    }},
    {"text": "Item 4", "fn": () => {}},
    {"text": "Item 4", "fn": () => {}},
    {"text": "Item 4", "fn": () => {}},
    {"text": "Item 4", "fn": () => {}},
    {"text": "Item 4", "fn": () => {}}
])*/

function randApple(w, h) {
    return [Smolpxl.randomInt(1, w - 2), Smolpxl.randomInt(1, h - 2)];
}

function startModel(w, h, highScore) {
    return {
        alive: true,
        apple: randApple(w, h),
        body: [
            [10, 10],
            [10, 11],
            [10, 12],
            [10, 13],
            [10, 14]
        ],
        dir: Smolpxl.directions.UP,
        highScore: highScore,
        queuedInput: [],
    };
}

function update(runningGame, oldModel) {
    if (!oldModel.alive) {
        if (runningGame.receivedInput("SELECT")) {
            const score = oldModel.body.length;
            const ret = startModel(
                runningGame.screen.width,
                runningGame.screen.height,
                (score > oldModel.highScore) ? score : oldModel.highScore
            );
            runningGame.endGame();
            return ret;
        } else {
            return;
        }
    }

    // Add any new input to the queue, and if the queue is long, throw
    // away everything except the last 3 items.
    let newQueuedInput = oldModel.queuedInput.concat(
        runningGame.input()).slice(-3);

    // Find input at the front of the queue that is not telling
    // us to reverse our direction.
    let fI = newQueuedInput.shift();
    let firstInp = fI ? Smolpxl.inputToDirection(fI.name) : null;
    while (
        firstInp &&
        Smolpxl.areOpposite(firstInp, oldModel.dir)
    ) {
        fI = newQueuedInput.shift();
        firstInp = fI ? Smolpxl.inputToDirection(fI.name) : null;
    }

    let newDir = oldModel.dir;
    if (firstInp) {
        newDir = firstInp;
    }

    let newHead = Smolpxl.coordMoved(oldModel.body[0], newDir);
    let newTail = oldModel.body.slice(0, -1);
    let newApple = oldModel.apple;

    // Die if hit edge
    let newAlive = oldModel.alive;
    if(
        newHead[0] === runningGame.screen.minX ||
        newHead[0] === runningGame.screen.maxX ||
        newHead[1] === runningGame.screen.minY ||
        newHead[1] === runningGame.screen.maxY
    ) {
        newAlive = false;
    }

    // If hit apple, extend body. Else, check for collision with body
    if (Smolpxl.equalArrays(newHead, oldModel.apple)) {
        const addLen = Smolpxl.randomInt(3, 7);
        for(let i = 0; i < addLen; i++) {
            newTail.push(newTail[newTail.length - 1].slice());
        }
        newApple = randApple(
            runningGame.screen.width, runningGame.screen.height);
    } else if(Smolpxl.arrayIncludesArray(newTail, newHead)) {
        newAlive = false;
    }

    let newModel = {
        alive: newAlive,
        apple: newApple,
        body: [newHead, ...newTail],
        highScore: oldModel.highScore,
        dir: newDir,
        queuedInput: newQueuedInput
    };

    return newModel;
}

function wellDoneMessage(score, highScore) {
    if (score <= 5) {
        return "Try again!";
    } else if (score > highScore) {
        return "New high score!";
    } else {
        return "Well done!";
    }
}

function view(screen, model) {
    screen.messageTopLeft(`Score: ${model.body.length}`);
    screen.messageTopRight(`High: ${model.highScore}`);

    for (const x of screen.xs()) {
        screen.set(x, screen.minY, WALL_COLOR);
        screen.set(x, screen.maxY, WALL_COLOR);
    }
    for (const y of screen.ys()) {
        screen.set(screen.minX, y, WALL_COLOR);
        screen.set(screen.maxX, y, WALL_COLOR);
    }
    for (const [x, y] of model.body) {
        screen.set(x, y, SNAKE_COLOR);
    }
    if (!model.alive) {
        screen.set(model.body[0][0], model.body[0][1], DEAD_COLOR);
        screen.dim();
        const score = model.body.length;
        const msg = wellDoneMessage(score, model.highScore);
        screen.message([
            "",
            msg,
            "",
            `Score: ${score}`,
            "",
            "Press <SELECT>",
            ""
        ]);
    }
    screen.set(model.apple[0], model.apple[1], APPLE_COLOR);
}

function refreshMenuFn(game, model) {
    return function() {
        function touchControlsText() {
            if (game.touchControlsVisible()) {
                return "Hide touch controls";
            } else {
                return "Show touch controls";
            }
        }

        game.setMenu(
            [
                {"text": "paused"},
                {"text": "continue", "fn": (menu) => menu.off()},
                {
                    "text": "Controls: " + Smolpxl.summariseControls(0),
                    "fn": (menu) => Smolpxl.changeControls(
                        menu, Smolpxl.players()[0], 0, refreshMenuFn(game, model))
                },
                {
                    "text": "Settings",
                    "items": [
                        { "text": "back", "fn": menu => menu.moveOut() },
                        Smolpxl.saveSettingsMenuItem(
                            refreshMenuFn(game, model)),
                        {
                            "text": touchControlsText(),
                            "fn": (menu) => {
                                game.toggleTouchControls();
                                refreshMenuFn(game, model)();
                                menu.render();
                            }
                        }
                    ]
                }
            ]
        );
    };
}

game.setPlayerInputs(["UP", "DOWN", "LEFT", "RIGHT"]);

const model = startModel(20, 20, 0);
refreshMenuFn(game, model)();
game.addHook(
    Smolpxl.HOOK_TOUCH_CONTROLS_TOGGLE,
    () => {
        refreshMenuFn(game, model)();
        game._.menu.render();
    }
);

game.start("snake", model, view, update);
