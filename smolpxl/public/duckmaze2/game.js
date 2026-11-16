"use strict";

const BG_COLOR = [7, 42, 200];
const BORDER_COLOR = [150, 150, 150];
const WALL_COLOR = [0, 0, 0];
const DUCK_COLOR = [255, 248, 0];
const DUCK_DETAIL_COLOR = [255, 169, 0];
const DUCK_DETAIL_COLOR2 = [187, 125, 1];
const WIDTH = 12;
const HEIGHT = 8;
const SCALE = 18;
const WALL_WIDTH = 2;
let restartLevel = false;

const game = new Smolpxl.Game();
game.sendPopularityStats();
game.showSmolpxlBar();
game.showControlsLeft(["MENU", "SELECT"]);
game.showControlsMiddle(["ARROWS"]);
game.setSourceCodeUrl(
    "https://gitlab.com/smolpxl/smolpxl/-/blob/master/public/duckmaze2/game.js"
);
game.setSize(WIDTH * SCALE + WALL_WIDTH, HEIGHT * SCALE + WALL_WIDTH);
game.setBorderColor(BORDER_COLOR);
game.setTitle("Duckmaze 2");

const LEVELS = [
    {
        time: 60,
        backgroundColor: [170, 179, 235],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - - ",
            "|           |           |",
            "                         ",
            "|  S        |           |",
            "                         ",
            "|           |            ",
            "                         ",
            "|           |           |",
            "                         ",
            "|           |           |",
            "                         ",
            "|           |           |",
            "                         ",
            "|           |           |",
            "                         ",
            "|           |           |",
            " - - - - - - - - - - - - "
        ],
        messages: [
            { start: 1, end: 5, text: "Escape from the maze!" },
            { start: 6, end: 10, text: "Try pushing a wall!" },
            { start: 11, end: 60, text: "To restart the level press <MENU>" }
        ]
    },
    {
        time: 60,
        backgroundColor: [170, 179, 235],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - - ",
            "|         | |           |",
            "                         ",
            "|         |             |",
            "                         ",
            "|         | |            ",
            "                         ",
            "|         | |           |",
            "                         ",
            "|         | |           |",
            "                         ",
            "|         | |           |",
            "                         ",
            "|  S      | |           |",
            "                         ",
            "|         | |           |",
            " - - - - - - - - - - - - "
        ],
        messages: [
            { start: 1, end: 6, text: "Walls only move if there is space" },
            { start: 11, end: 60, text: "To restart the level press <MENU>" }
        ]

    },
    {
        time: 60,
        backgroundColor: [170, 179, 235],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - - ",
            "|                       |",
            "                         ",
            "|  S                    |",
            "                         ",
            "|                       |",
            "                         ",
            "|                       |",
            "                         ",
            "|                       |",
            "                         ",
            "|                       |",
            "                         ",
            "|                       |",
            "                       - ",
            "|                     |  ",
            " - - - - - - - - - - -   "
        ],
        messages: [
            { start: 1, end: 6, text: "Can you see a way to get out?" },
            { start: 11, end: 60, text: "To restart the level press <MENU>" }
        ]

    },
    {
        time: 60,
        backgroundColor: [170, 179, 235],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - - ",
            "|S|                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "   - - - - - - - - - -   ",
            "|                   | | |",
            " - - - - - - - - - -     "
        ],
        messages: [
            { start: 11, end: 60, text: "To restart the level press <MENU>" }
        ]

    },
    {
        time: 60,
        backgroundColor: [170, 179, 235],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - - ",
            "|S|                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "                         ",
            "| |                     |",
            "   - - - - - - - - - - - ",
            "|                 |   | |",
            " - - - - - - - - - -     "
        ],
        messages: [
            {
                start: 1,
                end: 6,
                text: "Some levels are designed to trick you"
            },
            { start: 11, end: 60, text: "To restart the level press <MENU>" }
        ]

    },
    {
        time: 30,
        backgroundColor: [151, 213, 180],
        author: "Andy Balaam",
        level: [
            " - -   - - - - - - - - - ",
            "|                       |",
            " - - - - - - - - - -   - ",
            "|                     |  ",
            " - - - - - - - - - - -   ",
            "|                     | |",
            "                         ",
            "|  S                  | |",
            "                         ",
            "|                     | |",
            "                         ",
            "|                     | |",
            "                         ",
            "|                     | |",
            "                       - ",
            "|                       |",
            " - - - - - - - - - - - - "
        ],
        messages: [
            { start: 1, end: 6, text: "Some levels rely on misdirection" },
            { start: 11, end: 60, text: "To restart the level press <MENU>" }
        ]

    },
    {
        time: 30,
        backgroundColor: [151, 213, 180],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - -  ",
            "|                       | ",
            "                          ",
            "|                       | ",
            " - - - - - - - - - - - -  ",
            "| | |S| | | | | | | | |   ",
            " - - - - - - - - - - -    ",
            "|   | |               | | ",
            "       - - - - - - - - -  ",
            "|   | |               | | ",
            "       - - - - - - - -    ",
            "|   |                   | ",
            "       - - - - - - - - -  ",
            "|   | |                 | ",
            "     -                    ",
            "|                       | ",
            " - - - - - - - - - - - -  "
        ]
    },
    {
        time: 30,
        backgroundColor: [151, 213, 180],
        author: "Andy Balaam",
        level: [
            " -   -   -   -   -   - -  ",
            "  | | | | | | | | | | | | ",
            "   -   -   -   -   -   -  ",
            "| |       | |           | ",
            "   -   -   -   -   -   -  ",
            "  | | |   | | | | | | | | ",
            "   -   -   -   -   -   -  ",
            "| |       | |           | ",
            "   -   -   - - -   -   -  ",
            "  | | | | |S  |   |   |   ",
            "   -   -   - - - - -   -  ",
            "| |               | |   | ",
            "   -   -   -   - -   - -  ",
            "  | | | | | | | | | | | | ",
            "   -   -   -   -       -  ",
            "| |               | | |   ",
            " - - - - - - - - -   -    "
        ]
    },
    {
        time: 60,
        backgroundColor: [151, 213, 180],
        author: "Andy Balaam",
        level: [
            "   -   -   -   -   -   -  ",
            "|   | |   | |   | |   |   ",
            " - - - - - - - - - - -    ",
            "  |                   | | ",
            " -   - - - - - - - -   -  ",
            "| | | | | | | | | | | |   ",
            "     - - - - - - - -      ",
            "  | | |      S    | | | | ",
            " -   - - - - - - - -   -  ",
            "| | | | | |   | | | | |   ",
            " -   - - - -   - - -      ",
            "  |               | | | | ",
            "     - - -   - - - -   -  ",
            "| | |                 |   ",
            " - - - - - - - - - - - -  ",
            "  | | |   | |   | |   | | ",
            " -   -   -   -   -   -    "
        ]
    },
    {
        time: 15,
        backgroundColor: [151, 213, 180],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - -  ",
            "|S                      | ",
            " - - - - - - - - - - -    ",
            "                      | | ",
            " - - - - - - - - - -      ",
            "|                   | | | ",
            "   - - - - - - - -        ",
            "| |               | | | | ",
            "     - - - - - -          ",
            "| | |             | | | | ",
            "       - - - - - -        ",
            "| | |               | | | ",
            "     - - - - - - - -      ",
            "| |                   | | ",
            "   - - - - - - - - - -    ",
            "|                       | ",
            " - - - - - - - - - - - -  "
        ]
    },
    {
        time: 20,
        backgroundColor: [235, 222, 197],
        author: "Andy Balaam",
        level: [
            " - - - -   -   -   - - -  ",
            "  | |     | | | |   |   | ",
            "     - - - - - - - - -    ",
            "| | |   | |   | |   | |   ",
            "                   -   -  ",
            "| |     | | | | | | |   | ",
            "                   - -    ",
            "| | |   | | |   | | |   | ",
            "     - -           -   -  ",
            "| | |   |   | | | | |   | ",
            "           - - -   - -    ",
            "| | |   | | | | | |   | | ",
            "                   - -    ",
            "| |S|   |       |     | | ",
            "   - - - - - - - - - - -  ",
            "|                       | ",
            " - - - - - - - - - - - -  "
        ]
    },
    {
        time: 20,
        backgroundColor: [235, 222, 197],
        author: "Andy Balaam",
        level: [
            " - - - - -   - - - - - -  ",
            "|           |       |   | ",
            "   - - - - -     -        ",
            "  | | | | | | | | | | | | ",
            "   -       - - - - - -    ",
            "| |  S| |       | | | | | ",
            " - -   - - -   -          ",
            "| | | |     | | |   |   | ",
            "   - -   -   -     -   -  ",
            "|   | | | | |   | | | | | ",
            "     -   - -         -    ",
            "|   | | | |   | |   |   | ",
            " - - -   -   - - - -      ",
            "|     | | |   |       | | ",
            "   - - - - -     - - - -  ",
            "|         |   |     |   | ",
            " - - - - - - - - - - -    "
        ]
    },
    {
        time: 20,
        backgroundColor: [235, 222, 197],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - -  ",
            "| |     | |     | |     | ",
            " -   -   -   -   -   -    ",
            "| | | | | | | | | | | | | ",
            " -   -   -   -   -   -    ",
            "| | | | | | | | | | | | | ",
            " -   -   -   -   -   -    ",
            "| | | | | | | | | | | | | ",
            " -   -   -   -   -   -    ",
            "| | | | | | | | | | | | | ",
            " -   -   -   -   -   -    ",
            "| | | | | | | | | | | | | ",
            " -   -   -   -   -   -    ",
            "| | | | | | | | | | | | | ",
            " -   -   -   -   -   -    ",
            "    | |     | |     | |S| ",
            " - - - - - - - - - - - -  "
        ]
    },
    {
        time: 20,
        backgroundColor: [235, 222, 197],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - -  ",
            "|          S|           | ",
            " - - - - - - - - - - - -  ",
            "|           | |       | | ",
            "   -   -   - -     - -    ",
            "| | | | |   | | |     | | ",
            "         - - -   -   -    ",
            "| | | |     | | |     | | ",
            " -   -   -   -   -   -    ",
            "| | | |     | | |     | | ",
            "   - - - -   -   - - -    ",
            "| |     | | | | |     | | ",
            "   - -   -   -   -   -    ",
            "|   |   | | | |       | | ",
            " - -   - - - - - - - - -  ",
            "|     |     | |     |   | ",
            " -   - -   - -   - - -    "
        ]
    },
    {
        time: 20,
        backgroundColor: [235, 222, 197],
        author: "Andy Balaam",
        level: [
            " - - -   -   - - - - - -  ",
            "    |   | | | | |   |   | ",
            " - - - - - -              ",
            "| | | | |   | | | | | | | ",
            "                   -      ",
            "| | | | |   |   | | | | | ",
            "                          ",
            "|   | | |   |   | | | | | ",
            "                       -  ",
            "| | | | |   | | | | | | | ",
            "                          ",
            "| | | | |   | | | | | |   ",
            "                          ",
            "| | | | |   | | |  S|   | ",
            "   -   -   -   -   -      ",
            "  | | |   | | | | | | | | ",
            " -   - - -   -   -   - -  "
        ]
    },
    {
        time: 17,
        backgroundColor: [255, 214, 238],
        author: "Andy Balaam",
        level: [
            "   - - - - - - - - -   -  ",
            "|   | |           | | | | ",
            " -                 - - -  ",
            "  | | |           |   |   ",
            "   -                   -  ",
            "| |   |           |   | | ",
            " - - -             - - -  ",
            "  |                     | ",
            "                          ",
            "| |                     | ",
            " - - -             - - -  ",
            "| | | |           |S| | | ",
            "                   - - -  ",
            "| | | |           | | | | ",
            "                   - - -  ",
            "| | | |           | | | | ",
            "       - - - - - - - - -  "
        ]
    },
    {
        time: 17,
        backgroundColor: [255, 214, 238],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - - - -  ",
            "|                       | ",
            " -     - - - - - - - - -  ",
            "| |   |       |   | | | | ",
            "         - - -     -      ",
            "| |   | | |   |   | | | | ",
            "   -     - - - - - -      ",
            "| |   | | |   | | |     | ",
            "   - -                    ",
            "| |  S| | |   | | |     | ",
            "   - -   - -   - - - - -  ",
            "| | | |     | |         | ",
            "     - - -     - -   - -  ",
            "|         | | |         | ",
            "   - - - -       - - -    ",
            "|           | |         | ",
            " - - - - - -   - - - - -  "
        ]
    },
    {
        time: 17,
        backgroundColor: [255, 214, 238],
        author: "Andy Balaam",
        level: [
            " - - - - - - - - - -   -  ",
            "|           |S    |   | | ",
            "                   - -    ",
            "|           |   | |   | | ",
            "                   - -    ",
            "|           |   |     |   ",
            "             - - - - - -  ",
            "|         | | | | | | | | ",
            "               -   -      ",
            "|       | | | | | | | | | ",
            "             -   -   -    ",
            "|     | | | | | | | | | | ",
            "               -   -      ",
            "|   | | | | | | | | |   | ",
            "     -   -   -   -   -    ",
            "| | | | | | | | | | | | | ",
            " - -   -   -   -   -   -  "
        ]
    },
    {
        time: 20,
        backgroundColor: [255, 214, 238],
        author: "Jean-Michel Baudrey",
        level: [
            " -   - - - - - - - - - -  ",
            "|   | | | | | | | | | | | ",
            "   - - - - - - - - - -    ",
            "                      | | ",
            " - - - - - - - - - - -    ",
            "| | | | | | | | | | | | | ",
            "   - - - - - - - - - - -  ",
            "| |                       ",
            "   - - - - - - - - - - -  ",
            "| | | | | | | | | | | | | ",
            " - - - - - - - - - - -    ",
            "  |                     | ",
            " - - - - - - - - - - -    ",
            "| | | | | | | | | | | | | ",
            " - - - - - - - - - - - -  ",
            "|S|                       ",
            " - - - - - - - - - - - -  "
        ],
        messages: [
            {
                start: 1,
                end: 6,
                text: "This level was designed by Jean-Michel Baudrey"
            }
        ]

    },
    {
        time: 30,
        backgroundColor: [255, 214, 238],
        author: "Jean-Michel Baudrey",
        level: [
            " - - - - - -   - - - - -  ",
            "|         | | |         | ",
            "     - - -                ",
            "|   |       | |         | ",
            "       - -     - - -      ",
            "|   | |   | | |     |   | ",
            " - - - - - - -   -        ",
            "          |S  |   | |   | ",
            " - -   - -     - -   - -  ",
            "|   | |   |   |           ",
            "       -   - - - - - - -  ",
            "|   |     | | |   | |   | ",
            "     - - -     - -        ",
            "|         | |       |   | ",
            "               - - -      ",
            "|         | | |         | ",
            " - - - - -   - - - - - -  "
        ]
    },
    {
        time: 20,
        backgroundColor: [214, 255, 246],
        author: "Jean-Michel Baudrey",
        level: [
            " - - - - - - - - - - - -  ",
            "|                       | ",
            " - - - - - - - - - - - -  ",
            "|                       | ",
            " - - -       - -       -  ",
            "  |   | | | |     |   |   ",
            "                     -    ",
            "  |   | | | |     | |     ",
            "                   -      ",
            "  |   | | | |     | |     ",
            "                     -    ",
            "  |   | |S| |     |   |   ",
            " - - -   -   - -       -  ",
            "|                       | ",
            " - - - - - - - - - - - -  ",
            "|                       | ",
            " - - - - - - - - - - - -  "
        ]
    },
    {
        time: 20,
        backgroundColor: [214, 255, 246],
        author: "Jean-Michel Baudrey",
        level: [
            " - - - - - - - - - - - -  ",
            "  |S| | | |     |       | ",
            "   -       - - -          ",
            "|   |   | | | | |         ",
            " - -   -                  ",
            "|     |   | | | |         ",
            "   - -                    ",
            "|       | | | | |         ",
            " - - - -                  ",
            "|         | | | |         ",
            "   - - - -                ",
            "|           | | |         ",
            " - - - - - -              ",
            "|             | |         ",
            " - - - - - -              ",
            "|               |       | ",
            " - - - - - -   - - - - -  "
        ]
    },
    {
        time: 20,
        backgroundColor: [214, 255, 246],
        author: "Jean-Michel Baudrey",
        level: [
            " - - - - - - - - - - - -  ",
            "|                       | ",
            "   - - - - - - - - - -    ",
            "|                     | | ",
            " - - - - - - - - - -      ",
            "|                     | | ",
            "   - - - - - - - - - -    ",
            "|                     | | ",
            " - - - - - - - - - -      ",
            "|                     | | ",
            "   - - - - - - - - - -    ",
            "|                     |   ",
            " - - - - - - - - - -   -  ",
            "|                     |   ",
            "   - - - - - - - - - - -  ",
            "|                      S| ",
            " - - - - - - - - - - - -  "
        ]
    },
    {
        time: 20,
        backgroundColor: [214, 255, 246],
        author: "Jean-Michel Baudrey",
        level: [
            " - - - - - - - - - - - -  ",
            "|       |   |   |       | ",
            " - - -             - - -  ",
            "|     | |   |   | |     | ",
            " - -     -     -     - -  ",
            "|   | | |       | | |   | ",
            "           - -            ",
            "|   | | | |   | | | |     ",
            " - -                 - -  ",
            "    | | | |S  | | | |   | ",
            "           - -            ",
            "|   | | |       | | |   | ",
            " - -     -     -     - -  ",
            "|     | |   |   | |     | ",
            " - - -             - - -  ",
            "|       |   |   |       | ",
            " - - - - - - - - - - - -  "
        ]
    },
    {
        time: 20,
        backgroundColor: [214, 255, 246],
        author: "Jean-Michel Baudrey",
        level: [
            " - - - - - - -   - - - -  ",
            "|  S| |       | |         ",
            "   - -   - -   - - - -    ",
            "|   | |   | |   |     | | ",
            " -   - -   - -   - - -    ",
            "| |   | |   | |   |     | ",
            " - -   - -   - -   - - -  ",
            "  | |   | |   | |   |   | ",
            "   - -   - -   - -   - -  ",
            "    | |   | |   | |     | ",
            "     - -   - -   - - - -  ",
            "      | |   | |   | | | | ",
            "       - -   - -       -  ",
            "        | |   | | |   |   ",
            "         - -   -   - - -  ",
            "          | |     |   |   ",
            "           - - - - - -    "
        ]
    },
    {
        time: 15,
        backgroundColor: [224, 255, 214],
        author: "Jean-Michel Baudrey",
        level: [
            "   - - - - - - - - - - -  ",
            "  |   |   | | |   |   | | ",
            " -                        ",
            "|   | |     |     | |   | ",
            " - - - - - - - - - - - -  ",
            "|   | |     |     | |   | ",
            "                          ",
            "| |   |   | | |   |   | | ",
            " - - - - - - - - - - - -  ",
            "| |   |   | | |   |   | | ",
            "                          ",
            "|   | |     |     | |   | ",
            " - - - - - - - - - - - -  ",
            "|   | |     |     | |   | ",
            "                          ",
            "| |   |   | | |   |   |S| ",
            " - - - - - - - - - - - -  "
        ]
    },
    {
        time: 25,
        backgroundColor: [224, 255, 214],
        author: "Jean-Michel Baudrey",
        level: [
            " - - -   - - - - - - - -  ",
            "|                 | |   | ",
            " -   -   - - - -   -   -  ",
            "| | | | |   | | |   |   | ",
            "   - - - - - -   - - - -  ",
            "| | | | |   |   |   |   | ",
            "     -   -   - - - - -    ",
            "    |   |   |     |     | ",
            " -   - - - - - - - - - -  ",
            "| | | | | | | | |   | | | ",
            "   -   - - - -   - - -    ",
            "| | | |     | | |     | | ",
            " - - - -   - -   - - -    ",
            "|S|   | | |   | | | | | | ",
            " -     - -   - - -   -    ",
            "| | |   | |   |   |     | ",
            "   - - - - - - - -   - -  "
        ]
    },
    {
        time: 19,
        backgroundColor: [224, 255, 214],
        author: "Jean-Michel Baudrey",
        level: [
            " - - - - - - - - - - - -  ",
            "|S                      | ",
            " - - - - - - - - - - -    ",
            "|                       | ",
            "   - - - - - - - - - - -  ",
            "|                       | ",
            " - - - - - - - - - - -    ",
            "| |                     | ",
            "     - - - - - - - - - -  ",
            "| |                     | ",
            " - - - - - - - - - - -    ",
            "  |                     | ",
            "     - - - - - - - - - -  ",
            "| |                     | ",
            "   - - - - - - - - - -    ",
            "|                       | ",
            " - - - - - - - - - - - -  "
        ]
    },
    {
        time: 10,
        backgroundColor: [224, 255, 214],
        author: "Jean-Michel Baudrey",
        level: [
            " - - - - - - - - - - - -  ",
            "    |                   | ",
            " - -   - - - - - - - -    ",
            "    |                 | | ",
            " -   - - - - - - - -      ",
            "|                   | | | ",
            " - - - - - - - - - -      ",
            "  |               |   | | ",
            " -   - - - - - -     -    ",
            "  |             | | |   | ",
            " - - - - - - - -       -  ",
            "|                 | | |   ",
            "   - - - - - - - -     -  ",
            "|                   | |   ",
            " - - - - - - - - - -   -  ",
            "|S                      | ",
            " - - - - - - - - - - - -  "
        ],
        messages: [
            {
                start: 1,
                end: 6,
                text: "This is the last level.  Maybe you can design some?"
            }
        ]
    }
];

function update(runningGame, model) {
    switch (model.state) {
        case "playing": return updatePlaying(runningGame, model);
        case "lost":
        case "won":
        case "completed":
            return updateNotPlaying(runningGame, model);
    }
}

function updateNotPlaying(runningGame, model) {
    if (restartLevel) {
        return updatePlaying(runningGame, model);
    } else if (runningGame.receivedInput("SELECT")) {
        if (model.state === "won") {
            model.currentLevel += 1;
        } else if (model.state === "completed") {
            model.currentLevel = 0;
        }
        restartLevel = true;
        return updatePlaying(runningGame, model);
    }
}

function updatePlaying(runningGame, model) {
    const level = LEVELS[model.currentLevel];
    if (restartLevel) {
        model.world = createWorldFrom(level);
        model.state = "playing";
        restartLevel = false;
    }
    const h = (x, y) => {
        if (y < 0 || y >= model.world.hor.length) {
            return undefined;
        } else {
            return model.world.hor[y][x];
        }
    };
    const v = (x, y) => {
        if (y < 0 || y >= model.world.ver.length) {
            return undefined;
        } else {
            return model.world.ver[y][x];
        }
    };
    const setH = (x, y, value) => {
        if (
            y >= 0
            && y < model.world.hor.length
            && x >= 0
            && x < model.world.hor[y].length
        ) {
            model.world.hor[y][x] = value;
        }
    };
    const setV = (x, y, value) => {
        if (
            y >= 0
            && y < model.world.ver.length
            && x >= 0
            && x < model.world.ver[y].length
        ) {
            model.world.ver[y][x] = value;
        }
    };


    let changed = false;
    const x = model.world.pos[0];
    const y = model.world.pos[1];
    for (const inp of runningGame.input()) {
        if (inp.name === "RIGHT") {
            model.world.dir = Smolpxl.directions.RIGHT;
            if (v(x + 1, y) === 1) {
                model.world.kickT = model.world.t;
                if (v(x + 2, y) === 0) {
                    setV(x + 1, y, 0);
                    setV(x + 2, y, 1);
                }
            } else {
                model.world.kickT = null;
                model.world.pos[0] = x + 1;
            }
        } else if (inp.name === "LEFT") {
            model.world.dir = Smolpxl.directions.LEFT;
            if (v(x, y) === 1) {
                model.world.kickT = model.world.t;
                if (v(x - 1, y) === 0) {
                    setV(x, y, 0);
                    setV(x - 1, y, 1);
                }
            } else {
                model.world.kickT = null;
                model.world.pos[0] = x - 1;
            }
        } else if (inp.name === "UP") {
            model.world.dir = Smolpxl.directions.UP;
            if (h(x, y) === 1) {
                model.world.kickT = model.world.t;
                if (h(x, y - 1) === 0) {
                    setH(x, y, 0);
                    setH(x, y - 1, 1);
                }
            } else {
                model.world.kickT = null;
                model.world.pos[1] = y - 1;
            }
        } else if (inp.name === "DOWN") {
            model.world.dir = Smolpxl.directions.DOWN;
            if (h(x, y + 1) === 1) {
                model.world.kickT = model.world.t;
                if (h(x, y + 2) === 0) {
                    setH(x, y + 1, 0);
                    setH(x, y + 2, 1);
                }
            } else {
                model.world.kickT = null;
                model.world.pos[1] = y + 1;
            }
        }
    }
    model.world.t += runningGame.frameTimeMs();

    if (
        model.world.pos[0] < 0 ||
        model.world.pos[1] < 0 ||
        model.world.pos[0] >= WIDTH ||
        model.world.pos[1] >= HEIGHT
    ) {
        if (model.currentLevel === LEVELS.length - 1) {
            model.state = "completed";
        } else {
            model.state = "won";
        }
    } else if (model.world.t > level.time * 1000) {
        model.state = "lost";
    }

    return model;
}

function duckImage(dir, kick) {
    switch (dir) {
        case Smolpxl.directions.RIGHT:
            return (
                kick
                ? [
                    "......bbb.......",
                    ".....byyyb......",
                    "....byyyyyrrrr..",
                    "....byybwyrrrrr.",
                    "....byyyyyb.....",
                    ".....byyyb......",
                    "......bbb.......",
                    ".....byyyb......",
                    "....byybbyb.....",
                    "....byyybyb.....",
                    "....byybbyb.....",
                    ".....byyyb......",
                    ".....rbbb.r.....",
                    ".....r..rrr.....",
                    ".....r..........",
                    ".....rr........."
                ]
                : [
                    "......bbb.......",
                    ".....byyyb......",
                    "....byyyyyrrrr..",
                    "....byybwyrrrrr.",
                    "....byyyyyb.....",
                    ".....byyyb......",
                    "......bbb.......",
                    ".....byyyb......",
                    "....byybbyb.....",
                    "....byyybyb.....",
                    "....byybbyb.....",
                    ".....byyyb......",
                    ".....rbbb.......",
                    ".....r..r.......",
                    ".....r..r.......",
                    ".....rr.rr......"
                ]
        );
        case Smolpxl.directions.LEFT:
            return (
                kick
                ? [
                    ".......bbb......",
                    "......byyyb.....",
                    "..rrrryyyyyb....",
                    ".rrrrrybwyyb....",
                    ".....byyyyyb....",
                    "......byyyb.....",
                    ".......bbb......",
                    "......byyyb.....",
                    ".....bybbyyb....",
                    ".....bybyyyb....",
                    ".....bybbyyb....",
                    "......byyyb.....",
                    ".....r.bbbr.....",
                    ".....rrr..r.....",
                    "..........r.....",
                    ".........rr....."
                ]
                : [
                    ".......bbb......",
                    "......byyyb.....",
                    "..rrrryyyyyb....",
                    ".rrrrrybwyyb....",
                    ".....byyyyyb....",
                    "......byyyb.....",
                    ".......bbb......",
                    "......byyyb.....",
                    ".....bybbyyb....",
                    ".....bybyyyb....",
                    ".....bybbyyb....",
                    "......byyyb.....",
                    ".......bbbr.....",
                    ".......r..r.....",
                    ".......r..r.....",
                    "......rr.rr....."
                ]
            );
        case Smolpxl.directions.UP:
            return (
                kick
                ? [
                    "......bbb.......",
                    ".....byyyb......",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    ".....byyyb......",
                    "......bbb.......",
                    ".....byyyb......",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    ".....byyyb......",
                    "......bbb.......",
                    "......r.r.......",
                    "......r.R.......",
                    "......r........."
                ]
                : [
                    "......bbb.......",
                    ".....byyyb......",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    ".....byyyb......",
                    "......bbb.......",
                    ".....byyyb......",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    ".....byyyb......",
                    "......bbb.......",
                    "......r.r.......",
                    "......r.r.......",
                    "......r.r......."
                ]
            );
        case Smolpxl.directions.DOWN:
            return (
                kick
                ? [
                    "......bbb.......",
                    ".....byyyb......",
                    "....bwbybwb.....",
                    "....byyyyyb.....",
                    "....byrrryb.....",
                    ".....byryb......",
                    "......bbb.......",
                    ".....byyyb......",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    ".....byyyb......",
                    "......bbb.......",
                    "......r.r.......",
                    "......R.r.......",
                    "........r......."
                ]
                : [
                    "......bbb.......",
                    ".....byyyb......",
                    "....bwbybwb.....",
                    "....byyyyyb.....",
                    "....byrrryb.....",
                    ".....byryb......",
                    "......bbb.......",
                    ".....byyyb......",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    "....byyyyyb.....",
                    ".....byyyb......",
                    "......bbb.......",
                    "......r.r.......",
                    "......r.r.......",
                    "......r.r......."
                ]
            );
        default:
            throw new Error(`Unexpected direction: ${dir}`);
    }
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

function viewMessages(screen, model, messages) {
    const t = model.world.t / 1000.0;
    const h = SCALE * 0.3;
    const y = WALL_WIDTH + 1;
    for (const message of messages) {
        const x = ((SCALE * WIDTH) - screen.textWidth(h, message.text)) / 2;
        if (t >= message.start && t <= message.end) {
            screen.addText({
                x,
                y,
                h,
                text: message.text,
                color: Smolpxl.colors.BLACK,
                outlineColor: Smolpxl.colors.WHITE
            });
        }
    }
}

function view(screen, model) {
    const level = LEVELS[model.currentLevel];
    const t = model.world.t / 1000.0;
    let timeLeft = Math.floor(level.time - t);
    if (timeLeft < 0) {
        timeLeft = 0;
    }
    screen.messageBottomLeft(
        `Level: ${model.currentLevel + 1} (by ${level.author})`);
    screen.messageBottomRight(`Time: ${timeLeft} secs`);
    screen.setBackgroundColor(model.world.backgroundColor);

    if (
        model.state === "playing" &&
        level.messages &&
        level.messages.length > 0
    ) {
        viewMessages(screen, model, level.messages);
    }

    let y = 0;
    for (const ln of model.world.hor) {
        let x = 0;
        for (const pt of ln) {
            if (pt === 1) {
                screen.rect(
                    x * SCALE + WALL_WIDTH,
                    y * SCALE,
                    SCALE - WALL_WIDTH,
                    WALL_WIDTH,
                    WALL_COLOR
                );
            }
            x++;
        }
        y++;
    }
    y = 0;
    for (const ln of model.world.ver) {
        let x = 0;
        for (const pt of ln) {
            if (pt === 1) {
                screen.rect(
                    x * SCALE,
                    y * SCALE + WALL_WIDTH,
                    WALL_WIDTH,
                    SCALE - WALL_WIDTH,
                    WALL_COLOR
                );
            }
            x++;
        }
        y++;
    }
    const kick = (
        (model.world.kickT !== null)
        && (model.world.t - model.world.kickT < 500)
    );
    screen.draw(
        model.world.pos[0] * SCALE + WALL_WIDTH,
        model.world.pos[1] * SCALE + WALL_WIDTH,
        duckImage(model.world.dir, kick),
        {
            "y": DUCK_COLOR,
            "r": DUCK_DETAIL_COLOR,
            "R": DUCK_DETAIL_COLOR2,
            "b": Smolpxl.colors.BLACK,
            "w": Smolpxl.colors.WHITE
        }
    );

    if (model.state === "lost") {
        screen.dim();
        screen.message([
            "",
            "Out of time!",
            "",
            "<SELECT> to try again",
            "",
            "<MENU> for the menu",
            ""
        ]);
    } else if (model.state === "won") {
        screen.dim();
        screen.message([
            "",
            "Well done, level complete!",
            "",
            "<SELECT> to continue",
            ""
        ]);
    } else if (model.state === "completed") {
        screen.dim();
        screen.message([
            "",
            "Congratulations!",
            "",
            "You have completed all the levels.",
            "",
            "Read the code to find",
            "out how to create your own!",
            "",
            "<SELECT> to continue",
            ""
        ]);
    }
}

function createWorldFrom(level) {
    const world = {
        hor: [],
        ver: [],
        pos: [5, 3],
        dir: Smolpxl.directions.RIGHT,
        t: 0,
        kickT: null,
        backgroundColor: level.backgroundColor
    };
    const HOR = 1;
    const VER = -1;
    let mode = HOR;
    let y = 0;
    for (const ln of level.level) {
        if (mode === HOR) {
            const h = [];
            let x = 0;
            for (let i = 1; i < (WIDTH * 2) + 1; i += 2) {
                const ch = ln[i] || " ";
                if (ch === "-") {
                    h.push(1);
                } else if (ch === " ") {
                    h.push(0);
                } else {
                    throw new Error(
                        "Unexpected hor character " +
                        `at (${x}, ${y}): ${ch}`
                    );
                }
                x++;
            }
            world.hor.push(h);
        } else if (mode === VER) {
            const v = [];
            let wall = true;
            let x = -0.5;
            for (let i = 0; i < (WIDTH * 2) + 1; i++) {
                const ch = ln[i] || " ";
                if (wall) {
                    if (ch === "|") {
                        v.push(1);
                    } else if (ch === " ") {
                        v.push(0);
                    } else {
                        throw new Error(
                            "Unexpected ver wall character " +
                            `at (${x}, ${y}): ${ch}`
                        );
                    }
                } else {
                    if (ch === "S") {
                        world.pos = [x, y];
                    } else if (ch !== " ") {
                        throw new Error(
                            "Unexpected ver nonwall character " +
                            `at (${x}, ${y}): ${ch}`
                        );
                    }
                }
                wall = !wall;
                x += 0.5;
            }
            world.ver.push(v);
            y++;
        }
        mode = -mode;
    }
    return world;
}

function startModel() {
    return {
        world: createWorldFrom(LEVELS[0]),
        currentLevel: 0,
        state: "playing"
    };
}

game.setMenu([
    {"text": "Continue", "fn": () => game.menuOff()},
    {"text": "Restart level", "fn": () => {
        restartLevel = true;
        game.menuOff();
    }}
])
game.start("duckmaze2", startModel(), view, update);
