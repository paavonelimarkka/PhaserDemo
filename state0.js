demo.state0 = function() {};
demo.state0.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#80ff80';
        console.log("State 0");

    },
    update:     function(){}
}