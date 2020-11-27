// var a = "Hello World";

// function b() {
//   console.log("Called b!");
// }

// b();
// console.log(a);

//Hoisting=variables  setup(and set equal to "undefined")and functions setup
// b();
// console.log(a);
// var a = "Hello World";

// function b() {
//   console.log("Called b!");
// }

// //undefined
// var a;
// console.log(a);

// if (a === undefined) {
//   console.log("a is undefined");
// } else {
//   console.log("a is defined");
// }

// // defined
// var a = "Hello world";
// console.log(a);

// if (a === undefined) {
//   console.log("a is undefined");
// } else {
//   console.log("a is defined");
// }

//Execution Context Runs Code(Execution Phase)
//Globa Object
//"this"
//Outer Environment

// function b() {
//   console.log("Called b!");
// }

// b();
// console.log(a);
// var a = "Hello World";

// console.log(a);

//Conceptual Aside
//Single threaded means one command at the time
//Synchronous Execution means one at a time and in order

// Function invocation and the execution stack

//Invocation means running a function, in Js, by using parenthesis()

//Global Execution Context (created and code is executed)
// b() means execution context (create and execute)
// function a() {
//   b();
//   var c;
// }

// function b() {
//   var d;
// }
// // a() means execution context (create and execute)
// a();
// var d;/Global Execution Context (created and code is executed)

//Functions, Context and Variable Environment
//Variable environment means where the variables live and how they relate to each other in memory

// function b() {
//   var myVar;
// }

// function a() {
//   var myVar = 2;
//   b();
// }

// var myVar = 1;
// a();

//b() Execution context
//output myVar undefined

//a() Execution Context
//Output myVar=2;

//Global Execution Context(created and code is executed)
//Output: myvar1;

// function b() {
//   var myVar;
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   console.log(myVar);
//   b();
// }

// var myVar = 1;
// console.log(myVar);
// a();
// console.log(myVar);

//output:
//1,2 et undefined

//The Scope Chain

// function b() {
//   console.log(myVar);
// }

// function a() {
//   var myVar = 2;
//   b();
//   // console.log(myVar);
// }

// var myVar = 1;
// a();

//Another example

// function a() {
//   function b() {
//     console.log(myVar);
//   }
//   var myVar = 2;
//   b();
//   // console.log(myVar);
// }

// var myVar = 1;
// a();

//Scope, ES6, and let

//Scope means where a variable is available in your code and if its truly the same
//variable or a new copy
//LET uses block scope
// if (a > b) {
//   let c= true;
// }

//Asynchronous callbacks
//Asynchronous means more than one at a time

//Javascript engine has event queue

//Long running function
// function waitThreeSeconds() {
//   var ms = 3000 + new Date().getTime();
//   while (new Date() < ms) {}
//   console.log("finished function");
// }

// function clickHandler() {
//   console.log("click event!");
// }

// //listen for the click event
// document.addEventListener("clik", clickHandler);

// waitThreeSeconds();
// console.log("finished execution");

//CONCEPTUAL ASIDE
//Types and JS
//Dynamic Typing: you don't tell the engine what type
//data of avariable holds; it figures it out while
//your code is running
//Variables can hold different types of values
//because it's all figured out during execution
//Static typing
// bool isNew = 'hello'; //an error
//Dynamic typing
//var isNew = true; // no errors
//isNew = 'yup!';
//isNew = 1;

//Primitive types a type of data that represents
//a single value which means is not an object
//undefined represents lack of existence, you cant set a variable on this
//nul represents lack of existence also, but you can set a variable to this
//boolen means true or false
//number is a floating point number(theres always some
//decimals). Unlike other programming languages, there's only one
//'number' type and it can make the math weird
//string is a sequenc of characters both '' and "" can be used
//symbol used in ES6 the next version of JS

//OPERATORS a special function that is syntactically(written differently)
//generally, operators take two parameters and return one result

// var a = 3 + 4;
// console.log(a);

//OPERATOR PRECEDENCE AND ASSOCIATIVITY
//Operator precendence which operator gets called first
//Functions are called in order of precedence (HIGHER precedence wins)
//Associativity: what order operator functions get called in:
//left-to-right or right-to-left when functions have the same precedenece

// var a = 3 + 4 * 5;
// console.log(a);

// var a = 2,
//   b = 3,
//   c = 4;
// a = b = c;
// console.log(a);
// console.log(b);
// console.log(c);

// var a = (3 + 4) * 5;
// console.log(a);

//CONCEPTUAL ASIDE
//Coercion means converting a value from one
//type to another. This happens quite often in JS
//because its dynamically typed

// var a = 1 + "2";
// console.log(a);

//COMPARISON OPERATORS

// console.log(1 < 2 < 3); //console.log(true < 3) means 1 < 3 which is true
// console.log(3 < 2 < 1); //console.log(false < 1) means 0 < 1 which is true
//Number(undefined) = NaN
//Number(null) = 0

// var a = 0;
// var b = false;

// if (a === b) {
//   console.log("They are equal");
// } else {
//   console.log("Nope, they are not");
// }

//Existence and Boolean
// var a;
// //goes to internet and looks for a value;
// //Boolean(0) = false
// //Boolean(undefined) = false
// //Boolean(null) = false
// //Boolean("") = false
// a = 0;
// if (a || a === 0) {
//   console.log("Something is there");
// }

//Default Values

// function greet(name) {
//   name = name || "Hazelle";
//   console.log(`Hello ${name}`);
// }
// greet("Tony");
// greet();

//FRAMEWORK ASIDE
//Default Values

// console.log(libraryName);

//OBJECTS AND FUNCTIONS

//Object can contain "primitive  property", object property and function method

// var person = new Object();

// person["firstname"] = "Tony";
// person["lastname"] = "Alicea";

// var firstNameProperty = "firstname";

// console.log(person);
// console.log(person[firstNameProperty]);
// console.log(person.firstname);
// console.log(person.lastname);

// person.address = new Object();
// person.address.street = "11 Main Street";
// person.address.city = "New York";
// person.address.state = "NY";

// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]["state"]);

//Objects and Object Literals
var Tony = {
  firstname: "Tony",
  lastname: "Alicea",
  address: {
    street: "111 Main St.",
    city: "New York",
    state: "NY",
  },
};

function greet(person) {
  console.log("Hi " + person.firstname);
}
greet(Tony);

greet({
  firstname: "Jane",
  lastname: "Doe",
});

Tony.address2 = {
  street: "333 Second St.",
};
