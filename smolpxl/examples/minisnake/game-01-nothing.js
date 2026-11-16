const game = new Smolpxl.Game();
game.setSize(20, 20);
game.setTitle("Minisnake");

function update(runningGame, model) {
}

function view(screen, model) {
}

game.start("minisnake", {}, view, update);

