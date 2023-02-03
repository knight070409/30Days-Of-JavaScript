class Level extends Phaser.Scene{
  constructor(){
    super('Level')
  }

  create(){
    this.gravity="y";
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "background").setInteractive();
    this.background.setOrigin(0,0);

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(600, 150, 'block2').setScale(2.75,0.65).refreshBody().setInteractive();
    this.platforms.create(960, 360, 'block2').setScale(1.2, 0.65).refreshBody().setInteractive();
    this.platforms.create(600, 700, 'block2').setScale(2.2, 1).refreshBody().setInteractive();
    this.platforms.create(220, 700, 'block2').setScale(0.35, 4.7).refreshBody().setInteractive();

    this.player = this.physics.add.sprite(220, 70, "player").setScale(0.85);

    this.WKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.SpaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.ENTERKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
     
  }

  update(){
    this.movePlayerManager();
    if(this.ENTERKey.isDown){
      this.scene.switch("Level1");
      }

  }


  movePlayerManager(){

    if(this.gravity=="y"){
      if (this.AKey.isDown) {
        this.player.setVelocityX(-100);
        this.player.play("left",true);
      } 
      else if (this.DKey.isDown) {
        this.player.setVelocityX(100);
        this.player.play("right",true);
      } 
      else if(this.SpaceKey.isDown && this.player.body.touching.down){
        this.player.setVelocityY(-250);
      }
      else{
        this.player.play("idle")
        this.player.setVelocityX(0);
      }
    }
  }
}