/**Arrow function */
function sayHi(name){return `Hi ${name}`}
let Hello = sayHi("Quynh");

//viet rut gon

let hello2 = (name) =>'Hi ${name}';

// Tinh tong cua mang

let sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < Array.length; i++){
        sum = sum +arr[i];
    }
    return sum;
}
console.log (sumArray[1,2,3,4]);

var binhphuong = a => a*a; //function co 1 tham so khong can ()
var chuoi = () => "empty";

/** Objects */

let person = new Object;

person.name =  "Quynh"
console.log(person.name);

let animal = {
    name: "Fish",
    color: "gray",
    "number feet": 2,
}
console.log(animal.color);
console.log(animal["number feet"]);
console.log(animal["name"]);

delete animal["number feet"] //xoa phan tu