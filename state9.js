demo.state9 = function() {};
demo.state9.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#FFFFFF';
        addChangeStateEventListeners();
    },
    update:     function(){}
}