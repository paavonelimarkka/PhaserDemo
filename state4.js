demo.state4 = function() {};
demo.state4.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#99ff99';
        addChangeStateEventListeners();
    },
    update:     function(){}
}