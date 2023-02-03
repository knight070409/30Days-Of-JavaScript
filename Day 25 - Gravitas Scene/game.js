var config = {
    width: 1280,
    height: 720,
    backgroundColor: 0x000000,
    scene: [Load, Level, Level1],
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }
    }
}

var game = new Phaser.Game(config);