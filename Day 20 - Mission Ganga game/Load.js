class Load extends Phaser.Scene {
    constructor(){
        super("loadScreen")
    }

    preload(){

        this.load.image("river", "assest/river.png");
        this.load.image("background", "assest/background.png");
    }

    create(){
    }

    update(){
        this.scene.switch("bootGame");
    }
}