demo.state2 = function() {};
demo.state2.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#80ff80';
        console.log("State 2");

    },
    update:     function(){}
}