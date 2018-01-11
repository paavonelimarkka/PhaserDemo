demo.state3 = function() {};
demo.state3.prototype = {
    preload:    function(){},
    create:     function(){
        game.stage.backgroundColor = '#eb99ff';
        console.log("State 3");
        addChangeStateEventListeners();
    },
    update:     function(){}
}