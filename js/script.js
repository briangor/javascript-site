'use strict';

//let functions = document.getElementsByClassName('functions');
//let functions = document.getElementById('functions');

//let num = document.getElementById('num').innerHTML;
//let power = document.getElementById('power').innerHTML;

function findPower(num, power) {
    
    let res = num ** power;
    //document.getElementById('pow-result').value = res;
}


let toggle = (feature) => {
    //console.log(feature);
    switchFn(feature);
    //return feature;
}

let switchFn = (f) => {
    switch (f) {
        case 'functions':
            alert("Functions")
            break;
        case 'closures':
            alert("Closures");
            break;
        case 'prototypes':
            alert("Prototypes");
            break;
        case 'objects':
            alert("Objects");
            break;
        case 'encapsulation':
            alert("Encapsulation")
            break;
        case 'inheritance':
            alert("Inheritance");
            break;
        default:
            alert("Select a feature");
            break;
    }
}


/* num = 7;
console.log(num);
function message() {
    'use strict';
    text = 'world'; // throws an error
}
console.log(message()); */

// 'use strict';
/* text = 'Hello'; // Error: variable is assigned but not defined */

// console.log("A builtin function ");

function displayMessage() {
    let name = "Function";
    let message = name + " in JS";
    let m = document.getElementById('name').value;
    console.log(m);
    //alert(message);
    return message;
}
//let result = displayMessage(); 
//console.log(result);




/* let func = function displayMessage() {
    let name = "Functions";
    let message = name + " in JS";
    return message;
}
console.log(func()); */

function getRate(val) { // 'val' is the parameter 
    let result = val * 0.15;
    return result; 
}
let rate = getRate(100); // '100' is the argument
console.log(rate);


/* let a = 'Hello'; // global variable
function greet() {
    let b = 'World'; // local variable
    console.log(a + ' ' + b);
    if (b == 'World') {
        let c = 'hello'; // block-scoped variable
        console.log(a + ' ' + b + ' ' + c);
    }
    console.log(a + ' ' + b + ' ' + c); // 'c' cannot be accessed
}
console.log(greet());; */

/* function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
Person.prototype.nationality = "English";
console.log(Person);
console.log(Person.prototype); */

/* function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function () {
    return this.firstName + " " + this.lastName;
};
console.log(Person);
console.log(Person.prototype); */



/* function Person() { // constructor function
    this.name = 'John'
}
Person.prototype.age = 20; // add a property
const person1 = new Person(); // creating an object
console.log(person1.age); // 20
Person.prototype = { age: 50 } // changing the property value of prototype
const person3 = new Person(); // creating new object
console.log(person3.age); // 50
console.log(person1.age); // 20 */

/* let student = {
    "id": 1,
    "name": "Doe"
}
console.log(student.name); */

/* let student = {
    "id": 1,
    "name": "Doe"
}
console.log(student["name"]); */

/* class Student {
    constructor() {
        let name;
    }
    getName() {return this.name;}
    setName(name) {this.name = name;}
}
let stud = new Student();
stud.setName("Doe");
console.log(stud.getName()); */

/* class Animal {
    //kind = 'mammal';
    constructor() {
        kind;
    }
    getKind(){return kind}
    setKind(){kind = 'mamal'}
}
class Dog {
    constructor() {
        let action = 'bark';
    }
}
let shepherd = new Animal();
console.log(shepherd.getKind());
 */

/* // parent class
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
// child class
class Student extends Person {

}
let student1 = new Student('Sam');
console.log(student1);
student1.greet(); */



/* // closure
function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8 */