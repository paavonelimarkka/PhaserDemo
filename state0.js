var demo = {};
var centerX = 1500/2;
var centerY = 1000/2;
var ukko;
var speed = 8;

demo.state0 = function() {};
demo.state0.prototype = {
    preload:    function(){
        
        game.load.image('ukko', 'assets/sprites/ukko.png');
        game.load.image('desertBG', 'assets/backgrounds/bg.png');
    },
    create:     function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        addChangeStateEventListeners();
        
        game.world.setBounds(0,0,3556,1000);
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var desertBG = game.add.sprite(0,0,'desertBG'); 
        
        ukko = game.add.sprite(centerX, centerY, 'ukko');
        ukko.anchor.setTo(0.5, 0.5);
        ukko.scale.setTo(0.8,0.8);
        game.physics.enable(ukko);
        ukko.body.collideWorldBounds = true;
        
        game.camera.follow(ukko);
        game.camera.deadzone = new Phaser.Rectangle(centerX-300, 0, 600, 1000);
        
    },
    update:     function(){
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            ukko.scale.setTo(0.8,0.8);
            ukko.x += speed;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            ukko.scale.setTo(-0.8,0.8);
            ukko.x -= speed;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            ukko.y -= speed;
            if (ukko.y < 168) {
                ukko.y = 168;
            }
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            ukko.y += speed;
            if (ukko.y>768) {
                ukko.y = 768;
            }
        }
    }
}

function changeState(i, stateNum) {
    console.log('State: ' + stateNum);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args) {
   game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);   
}

function addChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
    addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
    addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
    addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
    addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
    addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
    addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
    addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}