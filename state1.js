var demo = {};
demo.state1 = function () {};
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log("State 1");
    },
    update: function(){}
}