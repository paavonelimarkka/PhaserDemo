demo.state6 = function() {};
demo.state6.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#196666';
        console.log("State 6");
        addChangeStateEventListeners();
    },
    update:     function(){}
}