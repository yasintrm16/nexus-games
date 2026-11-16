const game = new Smolpxl.Game();
game.setSize(20, 20);
game.setTitle("Minisnake");

function update(runningGame, model) {
}

function view(screen, model) {
    // Snake
    for (const [x, y] of model.body) {
        screen.set(x, y, [0, 255, 0]);
    }

    // Apple
    screen.set(model.apple[0], model.apple[1], [255, 0, 0]);
}

function newModel() {
    return {
        apple: [5, 5],
        body: [[10, 10], [10, 11], [10, 12], [10, 13], [10, 14]]
    };
}

game.start("minisnake", newModel(), view, update);

