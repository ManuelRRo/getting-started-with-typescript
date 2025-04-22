//*********************************** */
// Variables
//******************
// Javascript (number,string,boolean,null,undefined,object)
// TypeScript (any,unknown,never,enum,tuple,Void,Never,Undefined) */
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

const mySpam = document!.getElementById('msg-welcome');
mySpam!.textContent = "Hello World";
console.log(mySpam);

//****************UNION TYPES******************** */
let someValue: number | string;
someValue = 234;
someValue = "Hello Ravn!";
// ERROR! someValue = true;
//****************Using the --strictNullChecks Compiler Option******************** */
let basicString: string; // can be only string

let nullableString: string | null; // can be string or null

let mysteryString: string | null | undefined; // can be string,null or undefined

/*****************TYPE ASSERTIONS******************** */

let value: any  = 5;

let fixedString: string = (<number>value).toFixed(4);

console.log(fixedString); // 5.0000

let fixedStringg: string = (value as number).toFixed(4);

console.log(fixedString); // 5.0000

function startGame(){
    let playerName: string = 'John';
    logPlayer(playerName);    
}

function logPlayer(name:string){
    console.log(`new player ${name}`);
}

startGame();

/*****************ANOTATION WITH FUNCTIONS******************** */
function greeting (greeting: string = "Good morning!" ) : void {

    console.log(`${greeting}`);

}

function sum(a:number,b:number) : number{
    return a + b;
}

function division(c:number,d:number) : string {
    const result = c/d;
    return ((result) as number).toFixed(4);
}

function isDayOrNight(value:boolean = false): number{
    if(value){
        console.log('Good morning!');
        return 1;
    }else{
        console.log('Good Night!');
        return 0;
    }
}

console.log(division(24,4));
console.log(isDayOrNight(true));
// the <> is a type assertions
//this function return undifined if the string is empty
function getInputValue(elementId: string): string | undefined {

    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

    if(inputElement.value === ' '){
        return undefined;
    }else{
        return inputElement.value;
    }
}

/*****************ARROW FUNCTIONS******************** */
let squareit = (x:number): number => x*x ;
let result = squareit(4);

let adder = (a:number,b:number):number => a+b;

let greetinng =()=>console.log('Hello World');

function logError(err: string): void {
    console.error(err);
}

/*****************Creatin interface******************** */

interface Employee {
    name: string,
    title: string,
}

interface Manager extends Employee {
    department: string;
    numOfEmployees: number;
    scheduleMeeting: (topic:string) => void;
}

let developer = { 
    name: 'Meme',
    title: 'Node js traine',
    editor: 'Vim'
}

let newEmployee: Employee = developer;

/*****************Class members******************** */
class Developer{
    
    department: string = "";
    
    private _title: string ="";
    
    get title(): string{
        return this._title;
    }

    set title(newTitle: string){
        this._title = newTitle.toUpperCase();
    }

    documentRequirements(requirements: string): void{
        console.log(requirements);
    }
}