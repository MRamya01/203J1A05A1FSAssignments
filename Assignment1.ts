//1.Basic Types //
let p: boolean=true;
let q: number=30;
let r: string="Ramya";
let s: number[]=[30,29,14];
let n: [string,number] = ["Ramya",30];
enum days{
    Monday=1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
let x: days = days.Wednesday;
console.log(p);
console.log(q);
console.log(r);
console.log(s);
console.log(n);
console.log(x);

//2.Function-1//
function add(x: number, y: number) {
    return x+y;
}
console.log(add(3,9));

//2.Function-2//
function capitalize(x:string){
    return x.toUpperCase();
}
console.log(capitalize("ramya"));

//3.Interfaces//
interface Person{
    name: string,
    age: number,
    email: string
  };
  
  const user: Person = {
    name: "Ramya",
    age: 21,
    email: "ramya01@gmail.com"
  };
console.log(user);

//4.classes//
class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
  
    displayInfo(): void {
        console.log(`Car Information:
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}`);
    }
  }
  const myCar = new Car("Toyota", "Camry", 2024);
  myCar.displayInfo();

  //5.Generics//
  function revarr<T>(arr: T[]): T[] {
    return arr.reverse();
}
const numberarr: number[] = [21,22,23,24,25];
console.log(revarr(numberarr)); 
const stringarr: string[] = ["dog", "cat", "rat"];
console.log(revarr(stringarr));