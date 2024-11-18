"use strict";
{
    //abstraction
    class CoffeeMachine {
        constructor() {
            this.isPowerOn = false;
        }
        powerOn() {
            this.isPowerOn = true;
            console.log("coffee machine is on");
        }
        makeCoffee() {
            if (this.isPowerOn) {
                console.log("coffee making cholse");
            }
            else {
                console.log("cholen bhai baire teke coffee pan kore asi");
            }
        }
        powerOf() {
            this.isPowerOn = false;
            console.log("coffee machine off kore dilam");
        }
    }
    const myCoffeeMachine = new CoffeeMachine();
    myCoffeeMachine.powerOn();
    myCoffeeMachine.makeCoffee();
    myCoffeeMachine.powerOf();
}
