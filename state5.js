demo.state5 = function() {};
demo.state5.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#c2f0f0';
        addChangeStateEventListeners();
    },
    update:     function(){}
}