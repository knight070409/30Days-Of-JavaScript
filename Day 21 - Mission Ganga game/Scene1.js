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

        this.bottle1 = this.add.sprite(config.width - 50, config.height / 2 +135, "bottle1");
        this.bottle1.setScale(0.1);

        this.bottle2 = this.add.sprite(config.width - 50, config.height / 2 -100, "bottle2");
        this.bottle2.setScale(0.125);

        this.can = this.add.sprite(config.width - 50, config.height / 2 -128, "can");
        this.can.setScale(0.1);

        this.washer = this.add.sprite(config.width -50, config.height / 2 +100, "washer");
        this.washer.setScale(0.15);

        this.bottle1.setInteractive();
        this.bottle2.setInteractive();
        this.washer.setInteractive();
        this.can.setInteractive();

    }

    update(){
        this.river.tilePositionX += 1;
        this.background.tilePositionX += 1;

        this.moveGarbage(this.bottle1, 2);
        this.moveGarbage(this.bottle2, 2);
        this.moveGarbage(this.can, 3);
        this.moveGarbage(this.washer, 3);
    }

    moveGarbage(garbage, speed){
        garbage.x -= speed;
        if(garbage.x < 0){
            this.ResetPos(garbage);
        }
    }

    ResetPos(garbage) {
        garbage.x = config.width;
        var randomY = Phaser.Math.Between(config.height / 2 - 128, config.height);
        garbage.y = randomY;
    }
}

