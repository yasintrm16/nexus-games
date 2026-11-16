"use strict";

// TODO: allow setting character start height
// TODO: Choose level menu option
// TODO: Mention click/touch to start and to move


const FPS = 60;
const BG_COLOR = [130, 187, 157];
const BLOCK_COLOR = [3, 53, 59];
const FINISH_COLOR = [200, 255, 200];
const FACE_COLOR = Smolpxl.colors.BLACK;
const WIDTH = 100;
const HEIGHT = 100;
const METAL_COLOR = [200, 200, 240];
const METAL_COLOR_PRESSING = [240, 240, 250];
const METAL_WIDTH = 6;
const SPRING_COLOR = [255, 79, 48];
const SPRING_COLOR_STUCK = [100, 0, 0];
const SPRING_COLOR_PRESSING = [100, 100, 100];
const NAT_LENGTH = 15;
const MAX_LENGTH = 30;
const SPRING_WIDTH = 10;
const SPRING_1_HEIGHT = 5;
const SPRING_2_HEIGHT = 3;
const SPRING_1_MASS = 200.0;
const SPRING_2_MASS = 100.0;
const SPRINGINESS = 10.0;
const POWER = 50.0;
const THRUST = 5.0;
const GRAVITY = 0.0000981;
const AIR_RESISTANCE = 0.01;

const LEVELS = [
    {
        name: "Boing along",
        finish: {x: 75, y: 0, w: 10, h: 75},
        blocks: [
            {x: -25, y:  0, w: 310, h:  2}, // Whole-level roof
            {x: -25, y: 65, w:  50, h: 10}, // First platform
            {x: -25, y: 15, w:  50, h:  5}, // First roof
            {x:  25, y: 75, w: 125, h: 10}  // Second platform
        ],
    },
    {
        name: "The Gap",
        finish: {x: 75, y: 0, w: 10, h: 75},
        blocks: [
            {x: -25, y:  0, w: 310, h:  2}, // Whole-level roof
            {x: -25, y: 65, w:  50, h: 10}, // First platform
            {x:  45, y: 65, w: 105, h: 10}  // Second platform
        ],
    },
    {
        name: "Squeeze",
        finish: {x: 75, y: 0, w: 10, h: 75},
        blocks: [
            {x: -25, y: 65, w: 310, h: 10}, // Whole-level floor
            {x:  15, y:  0, w: 270, h: 50}  // Top block
        ],
    },
    {
        name: "Rhythm Jump",
        finish: {x: -25, y: 0, w: 525, h: 10},
        blocks:
            [
                {x: -25, y: 65, w: 525, h: 10}, // Whole-level floor
                {x: 500, y:  0, w: 10, h: 75}    // End
            ].concat(
                Array.from(
                    Array(11),
                    (_, i) => [
                        {x: (i*50) - 25, y:80, w:1, h:13},
                        {x: (i*50) - 24, y:81, w:1, h:1},
                        {x: (i*50) - 26, y:81, w:1, h:1},
                        {x: (i*50) - 23, y:82, w:1, h:1},
                        {x: (i*50) - 27, y:82, w:1, h:1},
                        {x: (i*50), y:83, w:1, h:7},
                        {x: (i*50) + 1, y:84, w:1, h:1},
                        {x: (i*50) - 1, y:84, w:1, h:1},
                        {x: (i*50) + 2, y:85, w:1, h:1},
                        {x: (i*50) - 2, y:85, w:1, h:1},
                    ]
                )
            ).flat(),
    },
    {
        name: "The Gap Two",
        finish: {x: 110, y: 0, w: 10, h: 75},
        blocks: [
            {x: -25, y:  0, w: 200, h:  2}, // Whole-level roof
            {x: -15, y: 10, w:  30, h:  1}, // Arrow line
            {x:  13, y:  9, w:   1, h:  1}, // Arrow
            {x:  12, y:  8, w:   1, h:  1},
            {x:  13, y: 11, w:   1, h:  1},
            {x:  12, y: 12, w:   1, h:  1},
            {x: -25, y: 65, w:  50, h: 10}, // First platform
            {x:  80, y: 65, w: 105, h: 10}  // Second platform
        ],
    },
    {
        name: "High Jump",
        finish: {x: 75, y: 0, w: 10, h: 50},
        blocks: [
            {x: -25, y: 75, w: 200, h:  2}, // Whole-level floor
            {x:  65, y: 50, w:  20, h: 25}, // Higher block
            {x:  45, y: 65, w:  20, h: 10}  // Lower block
        ],
    },
    {
        name: "Momentum",
        finish: {x: 55, y: 0, w: 20, h: 20},
        blocks: [
            {x: -25, y:  0, w: 100, h:  2}, // Whole-level roof
            {x: -15, y: 45, w:  20, h:  2}, // Left platform
            {x:  15, y: 75, w:  40, h:  2}  // Middle platform
        ],
    },
    {
        name: "Parkour",
        finish: {x: 105, y: 15, w: 10, h: 20},
        blocks: [
            {x:  -5, y: 75, w:  10, h: 25}, // Platform 1
            {x:  25, y: 65, w:  10, h: 35}, // Platform 2
            {x:  55, y: 55, w:  10, h: 45}, // Platform 3
            {x: 105, y: 35, w:  10, h: 75}  // Platform 4
        ],
    },
    {
        name: "Momentum Two",
        finish: {x: 75, y: 0, w: 10, h: 55},
        blocks: [
            {x:  -5, y: 95, w:  15, h:  5}, // Initial platform
            {x:  35, y: 55, w:  50, h:  5}  // Final platform
        ],
    },
    {
        name: "Sewer",
        finish: {x: 155, y: 15, w: 10, h: 20},
        blocks: [
            {x:  -5, y: 75, w:  10, h:  5}, // Platform 1
            {x:  25, y: 65, w:  10, h:  5}, // Platform 2
            {x:  55, y: 55, w:  10, h:  5}, // Platform 3
            {x: 105, y:  0, w:  60, h: 15}, // Tube top
            {x: 105, y: 35, w:  60, h: 65}  // Tube bottom
        ],
    }
];

const game = new Smolpxl.Game();
game.sendPopularityStats();
game.showSmolpxlBar();
game.setPlayerInputs(["BUTTON1", "BUTTON2"]);
game.showControlsLeft(["MENU", "SELECT"]);
game.showControlsMiddle([{control: "BUTTON1", name: "Go"}]);
game.showControlsRight([{control: "BUTTON2", name: "Reset"}]);
game.setSourceCodeUrl(
    "https://gitlab.com/smolpxl/smolpxl/-/blob/master/public/spring/game.js"
);
game.setSize(WIDTH, HEIGHT);
game.setBackgroundColor(BG_COLOR);
game.setTitle("Smolpxl Spring");
game.setFps(FPS);

function newModel(oldModel, next_level) {
    let lev = 0;
    let title = true;
    if (oldModel) {
        lev = oldModel.level;
        title = oldModel.title;
    }
    if (next_level) {
        lev++;
        if (lev >= LEVELS.length) {
            lev = 0;
        }
    }
    const y2 = ((HEIGHT - SPRING_2_HEIGHT) / 2) - 10;
    return {
        alive: true,
        finished: false,
        title: title,
        tick: 0,
        x: 0,
        vx: 0,
        y1: y2 - NAT_LENGTH,
        y2,
        vy1: 0,
        vy2: 0,
        pressing: false,
        stickyness: "unstuck",
        level: lev
    };
}

function update(runningGame, model) {
    if (runningGame.receivedInput("BUTTON2")) {
        return newModel(model);
    }

    if (!model.alive) {
        if (
            runningGame.receivedInput("SELECT") ||
            runningGame.receivedInput("LEFT_CLICK")
        ) {
            runningGame.endGame();
            model.title = true;
            return newModel(model);
        }
        return model;
    }

    if (model.finished) {
        if (
            runningGame.receivedInput("SELECT") ||
            runningGame.receivedInput("LEFT_CLICK")
        ) {
            return newModel(model, true);
        }
        return model;
    }

    model.title = false;

    model.tick++;
    const origY1 = model.y1;
    const origY2 = model.y2;
    updateSpring(model);
    updatePower(runningGame, model);
    updateGravity(model);
    updateBounce(model, origY1, origY2);
    updateThrust(model);
    updateFinish(model, origY1, origY2);
    updateCrash(model, origY1, origY2);
    model.vy1 *= 1 - AIR_RESISTANCE;
    model.vy2 *= 1 - AIR_RESISTANCE;
    model.y1 += model.vy1;
    model.y2 += model.vy2;
    model.x += model.vx;
    return model;
}

function updateCrashMiddle(block, model, origY1, origY2) {
    if (
        origY1 + (SPRING_1_HEIGHT / 2) <= block.y &&
        model.y1 + model.vy1 + (SPRING_1_HEIGHT / 2) >= block.y
    ) {
        model.alive = false;
    } else if (
        origY2 - (SPRING_2_HEIGHT / 2) >= block.y + block.h &&
        model.y2 + model.vy2 - (SPRING_2_HEIGHT / 2) <= block.y + block.h
    ) {
        model.alive = false;
    }
}

function updateCrashBlockSideways(model, block, spr) {
    if (
        model.x + (SPRING_WIDTH / 2) <= block.x &&
        model.x + model.vx + (SPRING_WIDTH / 2) > block.x
    ) {
        model.alive = false;
    }
}

function updateCrash(model, origY1, origY2) {
    const spring_1_top = model.y1 - (SPRING_1_HEIGHT / 2);
    const spring_1_bottom = model.y1 + (SPRING_1_HEIGHT / 2);
    const spring_2_top = model.y2 - (SPRING_2_HEIGHT / 2);
    const spring_2_bottom = model.y2 + (SPRING_2_HEIGHT / 2);

    if (
        spring_2_bottom < -SPRING_WIDTH ||
        spring_1_top > HEIGHT + SPRING_WIDTH
    ) {
        model.alive = false;
        return;
    }

    const springs = [
        [spring_1_top, spring_1_bottom],
        [spring_2_top, spring_2_bottom]
    ];

    for (const block of LEVELS[model.level].blocks) {
        for (const spr of springs) {
            if (block.y <= spr[1] && block.y + block.h > spr[0]) {
                updateCrashBlockSideways(model, block, spr);
            }
        }
    }
    for (const block of LEVELS[model.level].blocks) {
        if (
            block.x <= model.x + (SPRING_WIDTH / 2) &&
            block.x + block.w > model.x - (SPRING_WIDTH / 2)
        ) {
            updateCrashMiddle(block, model, origY1, origY2);
        }
    }
}

function updateFinish(model, origY1, origY2) {
    const finish = LEVELS[model.level].finish;
    const spring1 = {
        x: model.x - (SPRING_WIDTH / 2),
        y: model.y1 - (SPRING_1_HEIGHT / 2),
        w: SPRING_WIDTH,
        h: SPRING_1_HEIGHT
    };
    const spring2 = {
        x: model.x - (SPRING_WIDTH / 2),
        y: model.y2 - (SPRING_2_HEIGHT / 2),
        w: SPRING_WIDTH,
        h: SPRING_2_HEIGHT
    };
    if (
        Smolpxl.rectanglesOverlap(spring1, finish) ||
        Smolpxl.rectanglesOverlap(spring2, finish)
    ) {
        model.finished = true;
    }
}

function updateThrust(model) {
    if (
        model.stickyness === "stuck" ||
        model.stickyness === "stuck_and_pressed"
    ) {
        if (model.pressing) {
            model.vx += THRUST / (SPRING_1_MASS + SPRING_2_MASS);
        } else {
            model.vx *= 0.99;
        }
    }
}

function updateStickyness(model, landing) {
    switch (model.stickyness) {
        case "stuck":
            if (!landing) {
                model.stickyness = "unstuck";
            } else if (model.pressing) {
                model.stickyness = "stuck_and_pressed";
            }
            break;
        case "stuck_and_pressed":
            if (!landing) {
                model.stickyness = "unstuck";
            } else if (!model.pressing) {
                model.stickyness = "unstuck_and_landing";
            }
            break;
        case "unstuck_and_landing":
            if (!landing) {
                model.stickyness = "unstuck";
            }
            break;
        case "unstuck":
            if (landing) {
                model.stickyness = "stuck";
            }
            break;
    }

    if (
        model.stickyness === "stuck" ||
        model.stickyness === "stuck_and_pressed"
    ) {
        model.vy2 = 0;
    }
}

function updateBounceBlock(block, model, origY1, origY2) {
    if (
        origY2 + (SPRING_2_HEIGHT / 2) <= block.y &&
        model.y2 + model.vy2 + (SPRING_2_HEIGHT / 2) >= block.y
    ) {
        // If landing
        model.y2 = block.y - (SPRING_2_HEIGHT / 2);
        model.vy2 = 0;
        const newLength = model.y2 - model.y1;
        if (newLength < (SPRING_1_HEIGHT + SPRING_2_HEIGHT) / 2) {
            model.y1 = model.y2 - ((SPRING_1_HEIGHT + SPRING_2_HEIGHT) / 2);
            if (model.vy1 > 0) {
                model.vy1 = -model.vy1 * 0.5;
            }
        }
        return true;
    } else if (
        origY1 - (SPRING_1_HEIGHT / 2) >= block.y + block.h &&
        model.y1 + model.vy1 - (SPRING_1_HEIGHT / 2) <= block.y + block.h
    ) {
        // If hitting head
        model.y1 = block.y + block.h + (SPRING_1_HEIGHT / 2);
        model.vy1 = -model.vy1 * 0.5;
    }

    // Return "are we on the ground?"
    return (origY2 + (SPRING_2_HEIGHT / 2) === block.y);
}

function updateBounce(model, origY1, origY2) {
    let landing = false;
    for (const block of LEVELS[model.level].blocks) {
        if (
            block.x <= model.x + (SPRING_WIDTH / 2) &&
            block.x + block.w > model.x - (SPRING_WIDTH / 2)
        ) {
            landing = updateBounceBlock(block, model, origY1, origY2) || landing;
        }
    }

    updateStickyness(model, landing);
}

function updateGravity(model) {
    model.vy1 += GRAVITY * SPRING_1_MASS;
    model.vy2 += GRAVITY * SPRING_2_MASS;
}

function updateSpring(model) {
    const length = model.y2 - model.y1;
    if (length > MAX_LENGTH) {
        model.y1 = model.y2 - MAX_LENGTH;
        if (model.vy1 < 0) {
            model.vy1 = -model.vy1 * 0.5;
        }
    } else if (length < (SPRING_1_HEIGHT + SPRING_2_HEIGHT) / 2) {
        model.y1 = model.y2 - ((SPRING_1_HEIGHT + SPRING_2_HEIGHT) / 2);
        if (model.vy1 > 0) {
            model.vy1 = -model.vy1 * 0.2;
        }
        if (
            model.stickyness !== "stuck" &&
            model.stickyness !== "stuck_and_pressed"
        ) {
            if (model.vy2 < 0) {
                model.vy2 = -model.vy2 * 0.2;
            }
        }
    }
    const force = SPRINGINESS * (length - NAT_LENGTH);
    model.vy1 += force / SPRING_1_MASS;
    model.vy2 -= force / SPRING_2_MASS;
}

function updatePower(runningGame, model) {
    for (const inp of runningGame.input()) {
        if (inp.name === "BUTTON1" || inp.name === "LEFT_CLICK") {
            model.pressing = true;
        } else if (
            inp.name === "RELEASE_BUTTON1" ||
            inp.name === "RELEASE_LEFT_CLICK"
        ) {
            model.pressing = false;
        }
    }

    if (model.pressing) {
        let power = POWER;
        if (model.stickyness === "stuck") {
            power *= 2;
        }
        model.vy1 += power / SPRING_1_MASS;
        model.vy2 -= power / SPRING_2_MASS;
    }
}

function view(screen, model) {
    let lev = model.level;
    if (lev < 0) {
        lev = 0;
    }
    const level = LEVELS[lev];

    if (model.title) {
        screen.messageBottomLeft("<SELECT> to start");
        screen.messageBottomRight("<MENU> for menu");
    } else {
        screen.messageBottomLeft(`Level:${model.level + 1} ${level.name}`);
        screen.messageBottomRight("<BUTTON1> to move, <BUTTON2> to reset");
    }

    const middle = WIDTH * 0.25;
    const spring_1_bottom = model.y1 + SPRING_1_HEIGHT / 2;
    const spring_2_bottom = model.y2 + SPRING_2_HEIGHT / 2;
    const spring_1_top = model.y1 - SPRING_1_HEIGHT / 2;
    const spring_2_top = model.y2 - SPRING_2_HEIGHT / 2;
    const spring_left = middle - SPRING_WIDTH / 2;

    screen.rect(
        level.finish.x - model.x + middle,
        level.finish.y,
        level.finish.w,
        level.finish.h,
        FINISH_COLOR
    );
    for (let block of level.blocks) {
        screen.rect(
            block.x - model.x + middle,
            block.y,
            block.w,
            block.h,
            BLOCK_COLOR
       );
    }

    const start = spring_1_bottom;
    const end = spring_2_top - 1;
    const gap = (end - start) / 4;
    if (gap > 0) {
        let metal_col = METAL_COLOR;
        if (model.pressing) {
            metal_col = METAL_COLOR_PRESSING;
        }
        for (let y = start; y <= end + 0.1; y += gap) {
            screen.rect(
                middle - (METAL_WIDTH / 2),
                y,
                METAL_WIDTH,
                1,
                metal_col
            );
        }
    }
    screen.rect(
        spring_left,
        spring_1_top,
        SPRING_WIDTH,
        SPRING_1_HEIGHT,
        SPRING_COLOR
    );
    screen.rect(
        spring_left,
        spring_2_top,
        SPRING_WIDTH,
        SPRING_2_HEIGHT,
        SPRING_COLOR
    );
    if (
        model.stickyness === "stuck_and_pressed" ||
        model.stickyness == "stuck"
    ) {
        screen.set(middle - 2, spring_2_bottom - 1, SPRING_COLOR_STUCK);
        screen.set(middle - 1, spring_2_bottom - 2, SPRING_COLOR_STUCK);
        screen.set(middle    , spring_2_bottom - 2, SPRING_COLOR_STUCK);
        screen.set(middle + 1, spring_2_bottom - 1, SPRING_COLOR_STUCK);
        if (model.pressing) {
            let off = 1;
            if (Math.round(model.x / 2) % 2 === 0) {
                off = 0;
            }
            screen.set(spring_left - 1 - off, spring_2_bottom - 3, SPRING_COLOR_PRESSING);
            screen.set(spring_left - 1 - off, spring_2_bottom - 2, SPRING_COLOR_STUCK);
            screen.set(spring_left - 2 - off, spring_2_bottom - 2, SPRING_COLOR_PRESSING);
            screen.set(spring_left - 1 - off, spring_2_bottom - 1, SPRING_COLOR_PRESSING);
        }
    }
    screen.set(middle - 3, Math.round(spring_1_top) + 1, FACE_COLOR);
    screen.set(middle + 2, Math.round(spring_1_top) + 1, FACE_COLOR);
    screen.set(middle - 1, Math.round(spring_1_bottom) - 2, FACE_COLOR);
    screen.set(middle    , Math.round(spring_1_bottom) - 2, FACE_COLOR);
    screen.set(middle + 1, Math.round(spring_1_bottom) - 2, FACE_COLOR);

    if (!model.alive) {
        screen.dim();
        screen.message([
            "",
            "Crash!",
            "",
            "<SELECT> to end, <BUTTON2> to try again",
            ""
        ]);
    } else if (model.finished) {
        const time = (model.tick / FPS).toFixed(2);
        const msg1 = (model.level === LEVELS.length - 1
            ? "All levels completed!"
            : "Level complete!"
        );
        const msg2 = (model.level === LEVELS.length - 1
            ? "<SELECT> to start again"
            : "<SELECT> for next level"
        );
        screen.dim();
        screen.message([
            "",
            msg1,
            "",
            `Time:${time}s`,
            "",
            msg2,
            "",
            "<BUTTON2> to try again",
            ""
        ]);
    }
}

game.start("spring", newModel(), view, update);
