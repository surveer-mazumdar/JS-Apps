
/*
Variable/ Object Annotations

*/
let numbers: number = 5;
let truths: boolean[] = [true, false]
let onlyStrings: string[] = ["asdf", "qwerty"]

class Car{

}
let car: Car = new Car();

let point: {x:number; y:number} = {
    x:30,
    y: 10
};

let now: Date = new Date();

let nothingMuch: null = null;
let nothing:undefined = undefined;

/**
 * Annotations aroud function
 */


 const logNumber: (i: number) => void = (i:number) => {

 }

const logNumberReturn: (i: number) => number = (i:number) => {
     return 5; // need a return. MUST 
}

function divide(a:number, b:number): number {
    return 5; 
}

/**
 * Understanding Inference
 */

 let speed = 5; //Inference on hover is number

 let time;
 time = 5; //Inference on hover is any

 /**
  * Any types
  */

  const anyTypeResponse = JSON.parse('');

/**
  * Fixing Any types
  */


 const knownTypeResponses: {
    name: string,
    age: number
 } = JSON.parse('{name: "Surveer", age: 31 }');

/**
 * Multiple type annotations
 */

 let numberAboveZero: boolean | number = false;
 numberAboveZero = 5;

 /**
  * Destructuring with Annotations
  */

  const todaysWeather = {
    date: new Date(),
    weather: "Sunny"
  };

  const logWeather = (forecast: {date: Date, weather: string}): void => {
      //forecast.date
      //forecast.weather 
  }

  const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    //date
    //weather 
}

/***
 * Typed Arrays: Arrays where each element is some consistent type of value
 */

 let arr : string[] = ["abc", "asd"];
 let arr1 : (string | Date) [] = [new Date(), "Surveer"];

 /**
  * Tuples
  */

  type Drink = [string, boolean, number] 

  let drinks: Drink[];
  drinks.push([
      "brown",
      true,
      40
  ])


  /****
   * Interfaces
   */

   interface Vehicle{
       name: string,
       year: number,
       isBroken: boolean
   };

   const printVehicles = (vehicle: Vehicle) => {
       console.log(vehicle);
   }
 