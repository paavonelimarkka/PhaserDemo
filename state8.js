demo.state8 = function() {};
demo.state8.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#ff0080';
        addChangeStateEventListeners();
    },
    update:     function(){}
}