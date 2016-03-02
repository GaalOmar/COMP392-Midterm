/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeedC1, rotationSpeedC2, rotationSpeedC3, rotationSpeedC4, rotationSpeedC5) {
            this.rotationSpeedC1 = rotationSpeedC1;
            this.rotationSpeedC2 = rotationSpeedC2;
            this.rotationSpeedC3 = rotationSpeedC3;
            this.rotationSpeedC4 = rotationSpeedC4;
            this.rotationSpeedC5 = rotationSpeedC5;
        }
        return Control;
    }());
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
