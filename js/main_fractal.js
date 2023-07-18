window.addEvent('domready',function(){
    fractal = {
        name: 'pythagoras',
        constructor: Pythagoras,
        width:800,
        height:530
    }

    fractal.instance = new fractal.constructor(fractal.name+"_canvas");
});