demo.state5 = function() {};
demo.state5.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#c2f0f0';
        console.log("State 5");
        addChangeStateEventListeners();
    },
    update:     function(){}
}