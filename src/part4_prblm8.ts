{
    /*
    Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car
    // Sample Input:
    new Car("Toyota", "Corolla", 2020);

    // Sample Output: 
    "Your car model is:  2020 Toyota Corolla"
    */
   class Car{
        brand:string
        model:string
        year:number
        constructor(brand:string,model:string,year:number){
            this.brand=brand
            this.model=model
            this.year=year
        }
        // function  displayInfo(brand:string,model:string,year:number):string{
        // displayInfo(brand:string,model:string,year:number):string{
        displayInfo():string{
            return `Your car model is ${this.year} ${this.brand} ${this.model} `
        }
   }

   const car1 = new Car("Toyota","corolla",2020)
//    const car1 = new Car()
//    console.log(car1.displayInfo)
   console.log(car1.displayInfo())
//    console.log(car1.displayInfo("Toyota","corolla",2020))






}