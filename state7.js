demo.state7 = function() {};
demo.state7.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#ff8c1a';
        addChangeStateEventListeners();
    },
    update:     function(){}
}