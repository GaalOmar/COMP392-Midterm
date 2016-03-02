/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        public rotationSpeedC1:number;
        public rotationSpeedC2:number;
        public rotationSpeedC3:number;
        public rotationSpeedC4:number;
        public rotationSpeedC5:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeedC1:number,rotationSpeedC2:number,rotationSpeedC3:number, rotationSpeedC4:number, rotationSpeedC5:number ) {
        this.rotationSpeedC1 = rotationSpeedC1;
        this.rotationSpeedC2 = rotationSpeedC2;
        this.rotationSpeedC3 = rotationSpeedC3;
        this.rotationSpeedC4 = rotationSpeedC4;
        this.rotationSpeedC5 = rotationSpeedC5;
        
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       public randomColour(): void {
            cube1.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            cube2.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            cube3.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            cube4.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
            cube5.material.setValues({color: (Math.random() * 0xFFFFFF << 0)});
        } 
    }
}
