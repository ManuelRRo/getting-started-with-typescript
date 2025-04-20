//*********************************** */
// Variables
//******************
// Javascript (number,string,boolean,null,undefined,object)
// TypeScript (any,unknown,never,enum,tuple) */
//*********************************** */
let age: number  = 20;
if( age < 50)
    age += 10;
//console.log(age)
let sale: number = 123_456_789;
let course: string = 'TypeScript';
let levet = true;
let level; // type any
 
function render(document: any){
    console.log(document);
}
//****************ARRAYS******************** */
let numbers: number [] = [1,2,3];
let nnumbers = [1,2,3,4]
let nnnumbers: number[] = []

numbers.forEach(n => n.toExponential);

//****************TUPLES******************** */
let user: [number,string] = [1,'Quaker'];

//****************ENUMS******************** */

//PascalCase
//start with small incremetn by one the rest of things
enum Size { small = 5,medium,large};

let mySize: Size = Size.medium;
console.log(mySize);