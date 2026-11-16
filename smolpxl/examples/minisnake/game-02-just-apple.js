const game = new Smolpxl.Game();
game.setSize(20, 20);
game.setTitle("Minisnake");

function update(runningGame, model) {
}

function view(screen, model) {
    screen.set(model.apple[0], model.apple[1], [255, 0, 0]);
}

function newModel() {
    return {
        apple: [5, 5]
    };
}

game.start("minisnake", newModel(), view, update);

