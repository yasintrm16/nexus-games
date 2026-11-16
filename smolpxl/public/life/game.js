"use strict";

const game = new Smolpxl.Game();
game.sendPopularityStats();
game.showSmolpxlBar();
game.setSourceCodeUrl(
    "https://gitlab.com/smolpxl/smolpxl/-/blob/master/public/life/game.js");
game.setSize(100, 100);
game.setBackgroundColor(Smolpxl.colors.WHITE);
game.setTitle("Smolpxl Conway's Life");
game.skipTitleScreen();

function numNeighbours(screen, x ,y) {
    const cols = [
        screen.at(x - 1, y - 1),
        screen.at(x    , y - 1),
        screen.at(x + 1, y - 1),
        screen.at(x - 1, y    ),
        screen.at(x + 1, y    ),
        screen.at(x - 1, y + 1),
        screen.at(x    , y + 1),
        screen.at(x + 1, y + 1)
    ];
    let ret = 0;
    for (const c of cols) {
        if (c[0] === 0) {
            ret++;
        }
    }
    return ret;
}

const GLIDER = [
    "......",
    "...#..",
    "....#.",
    "..###.",
    "......"
];

const GLIDER_GUN = [
        "......................................",
        ".........................#............",
        ".......................#.#............",
        ".............##......##............##.",
        "............#...#....##............##.",
        ".##........#.....#...##...............",
        ".##........#...#.##....#.#............",
        "...........#.....#.......#............",
        "............#...#.....................",
        ".............##.......................",
        "......................................"
]

function update(runningGame, oldModel) {
    let nextScreen = runningGame.screen.cloneModifiable();
    if (oldModel.nextScreen === null) {
        for (const y of nextScreen.ys()) {
            for (const x of nextScreen.xs()) {
                nextScreen.set(x, y, Smolpxl.colors.WHITE);
            }
        }
        nextScreen.draw(10, 10, GLIDER);
        nextScreen.draw(50, 10, GLIDER_GUN);
    } else {
        let screen = runningGame.screen;
        for (const y of screen.ys()) {
            for (const x of screen.xs()) {
                const nn = numNeighbours(screen, x, y);
                let live = screen.at(x, y)[0] === 0;
                if (nn === 3) {
                    live = true;
                } else if (nn < 2 || nn > 3) {
                    live = false
                }
                nextScreen.set(
                    x,
                    y,
                    live ? Smolpxl.colors.BLACK : Smolpxl.colors.WHITE
                );
            }
        }
        const clk = runningGame.receivedInput("LEFT_CLICK");
        if (clk) {
            nextScreen.draw(clk.x - 3, clk.y - 3, GLIDER);
        }
    }
    return {nextScreen};
}

function view(screen, newModel) {
    screen.messageBottomLeft("<MENU> to pause");
    screen.messageBottomRight("<LEFT_CLICK> to interact");
    screen.setFrom(newModel.nextScreen);
}

game.start("life", {nextScreen: null}, view, update);
