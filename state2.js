demo.state2 = function() {};
demo.state2.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#6699ff';
        console.log("State 2");
        addChangeStateEventListeners();
    },
    update:     function(){}
}