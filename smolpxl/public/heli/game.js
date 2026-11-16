"use strict";

// TODO: Mention click/touch to start and to control

const SKY_COLOR = [134, 187, 216];
const SAND_COLOR = [246, 174, 45];
const WATER_COLOR = [51, 101, 138];
const SHIP_COLOR = [47, 72, 88];
const DEATH_COLOR = [242, 100, 25];

const LEVELS = [
    {sand:  35, max: 10},
    {sand:  50, max: 11},
    {sand:  70, max: 13},
    {sand:  80, max: 15},
    {sand: 100, max: 17}
];

const game = new Smolpxl.Game();
game.sendPopularityStats();
game.showSmolpxlBar();
game.setSourceCodeUrl(
    "https://gitlab.com/smolpxl/smolpxl/-/blob/master/public/heli/game.js");
game.setSize(20, 20);
game.setBackgroundColor(SKY_COLOR);
game.setBorderColor(Smolpxl.colors.WHITE);
game.setFps(5);
game.setTitle("Smolpxl Heli");
game.setTitleMessage([
    "",
    "",
    "Smolpxl Heli",
    "Try to flatten the sandcastle before you crash!",
    "<SELECT> to start",
    "<BUTTON1> to drop some water",
    "<MENU> to pause",
    "",
    ""
]);

function createBuildings(levelNum) {
    let buildings = Array(10).fill(0);
    const lv = (levelNum >= LEVELS.length) ? LEVELS.length - 1 : levelNum;
    const level = LEVELS[lv];

    for (let i = 0; i < level.sand; i += 5) {
        let b = Smolpxl.randomInt(0, buildings.length - 1);
        while (buildings[b] >= level.max - 2) {
            b = Smolpxl.randomInt(0, buildings.length - 1);
        }
        buildings[b] += 2;
    }

    return buildings;
}

function startModel(highScore, score, level) {
    return {
        alive: true,
        finished: false,
        highScore: highScore,
        level: level,
        score: score,
        ship: [0, 0],
        water: null,
        buildings: createBuildings(level)
    };
}

function finished(model) {
    for (let b of model.buildings) {
        if (b > 0) {
            return false;
        }
    }
    return true;
}

function update(runningGame, model) {
    if (!model.alive) {
        if (
            runningGame.receivedInput("SELECT") ||
            runningGame.receivedInput("LEFT_CLICK")
        ) {
            runningGame.endGame();

            const highScore = (
                (model.score > model.highScore)
                ? model.score
                : model.highScore
            );
            return startModel(highScore, 0, 0);
        } else {
            return;
        }
    }

    if (model.finished) {
        if (
            runningGame.receivedInput("SELECT") ||
            runningGame.receivedInput("LEFT_CLICK")
        ) {
            model.finished = false;
            model = startModel(model.highScore, model.score, model.level + 1);
        }
        return model;
    }

    if (
        model.water === null && (
            runningGame.receivedInput("BUTTON1") ||
            runningGame.receivedInput("LEFT_CLICK")
        )
    ) {
        model.water = [model.ship[0], model.ship[1]];
    }

    if (model.alive) {
        let x = model.ship[0];
        let y = model.ship[1];

        x++;
        if (x >= 10) {
            x = 0;
            y++;
        }
        model.ship = [x, y];

        if (runningGame.screen.maxY - y <= model.buildings[x]) {
            model.alive = false;
        }
    }

    if (model.water !== null) {
        model.water[1] += 2;

        const bh = model.buildings[model.water[0]];
        const wh = runningGame.screen.maxY - model.water[1];
        if (bh > wh) {
            model.score++;
            model.buildings[model.water[0]] -= Smolpxl.randomInt(2, 6);
            model.water = null;

            if (finished(model)) {
                model.finished = true;
            }
        } else if (model.water[1] > runningGame.screen.maxY) {
            model.water = null;
        }
    }

    return model;
}

function wellDoneMessage(score, highScore) {
    if (score === 0) {
        return "Try again!";
    } else if (score > highScore) {
        return "New high score!";
    } else {
        return "Well done!";
    }
}

function view(screen, model) {
    screen.messageTopLeft(`Score: ${model.score}`);
    screen.messageTopRight(`High: ${model.highScore}`);

    for (let bx = 0; bx < 10; bx++) {
        screen.rect(
            bx * 2,
            1 + screen.maxY - model.buildings[bx],
            2,
            model.buildings[bx],
            SAND_COLOR
        );
    }
    if (model.water !== null) {
        screen.rect(
            model.water[0] * 2,
            model.water[1],
            2,
            2,
            WATER_COLOR
        );
    }
    const shipCol = model.alive ? SHIP_COLOR : DEATH_COLOR;
    screen.rect(
        model.ship[0] * 2,
        model.ship[1],
        2,
        2,
        shipCol
    );

    if (!model.alive) {
        screen.dim();
        const msg = wellDoneMessage(model.score, model.highScore);
        screen.message([
            "",
            msg,
            "",
            `Score: ${model.score}`,
            "",
            "Press <SELECT>",
            ""
        ]);
    } else if (model.finished) {
        screen.dim();
        screen.message([
            "",
            `Level ${model.level + 1} complete!`,
            "",
            "Press <SELECT>",
            ""
        ]);
    }
}

game.start("heli", startModel(0, 0, 0), view, update);
