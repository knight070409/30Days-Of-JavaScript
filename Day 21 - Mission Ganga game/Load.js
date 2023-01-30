class Load extends Phaser.Scene {
    constructor(){
        super("loadScreen")
    }

    preload(){

        this.load.image("river", "assest/river.png");
        this.load.image("background", "assest/background.png");
        this.load.image("bottle1", "assest/bottle1.png");
        this.load.image("bottle2", "assest/bottle2.png");
        this.load.image("can", "assest/can.png");
        this.load.image("washer", "assest/washer.png");
    }

    create(){
    }

    update(){
        this.scene.switch("bootGame");
    }
}