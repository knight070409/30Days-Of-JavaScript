class Scene1 extends Phaser.Scene {
    constructor(){
        super("bootGame")
    }

    create(){
        this.river = this.add.tileSprite(0, 0,config.width, config.height, "river");
        this.river.setOrigin(0, 0);

        this.background = this.add.tileSprite(0,0,config.width, 342, "background");
        this.background.setOrigin(0,0);
        this.background.setScale(1, 0.3);

    }

    update(){
        this.river.tilePositionX += 1;
        this.background.tilePositionX += 1;
        

    }
}

