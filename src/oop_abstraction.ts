{
    //abstraction

    class CoffeeMachine{
        private isPowerOn : boolean = false;

        powerOn(){
            this.isPowerOn=true;
            console.log("coffee machine is on");
        }

        makeCoffee(){
            if(this.isPowerOn){
                console.log("coffee making cholse")
            }else{
                console.log("cholen bhai baire teke coffee pan kore asi")
            }
        }
        powerOf(){
            this.isPowerOn = false;
            console.log("coffee machine off kore dilam");
        }
    }

    const myCoffeeMachine = new CoffeeMachine();
    myCoffeeMachine.powerOn()
    myCoffeeMachine.makeCoffee()
    myCoffeeMachine.powerOf()
    myCoffeeMachine.makeCoffee()








}