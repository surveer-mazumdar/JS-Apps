//Prototype Pattern
var TeslaModelS = function () {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
}

TeslaModelS.prototype = function () {

    var go = function () {
        // Rotate wheels
    };

    var stop = function () {
        // Apply brake pads
    };

    return {
        pressBrakePedal: stop,
        pressGasPedal: go
    }

}();

TeslaModelS.prototype.newFunc = function () {
    console.log("new Function");
}

var car = new TeslaModelS();


//Singleton Pattern
var FordModelS = (function(){

    var instance = null;
   // this is actual constructor with params
    return function(cfg) {
        if (typeof instance == null) {
            instance = this;                    
            this.cfg = cfg;
        }
        return instance;
    };    
})();