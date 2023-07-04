// MODULE 5 - Behind The Scenes Of JS - Weird Past (ES3 & ES5) & Present (ES6+)


------------------------------------------------------------------------------------


// 1. ES5 vs ES6+(The Next Gen JS) - Evolution of JS.

// ES = ECMAScript, JS is a specific version of ES. 

// This helped different browsers agree on a specific standard and then helped them to find a common ground for implementation for their features.

// JS evolved from ES3 to ES5 and to the newer version ES6.

// It is important to understand that when a new feature is released it doesn't mean that it is gonna get implemented immediately. 
// Different browsers take their required time to implement those features.

// Here there is a constant changes and addition for features but that doesn't mean old features are removed, we will learn about them in this lecture.

// In the old ES versions we had VAR only and LET & CONST came in with ES6.

// Refer to PDF for further support.


----------------------------------------------------------------------------------


// 2. VAR & LET-CONST...

// The differences and similarities.

/*

VAR :
Creates a variable.
Has been available since the pre JS.
Allows us to create variables in Functions and Global Scope.

LET :
Creates a variable.
Available since ES6.
Allows us to create variable within BLOCK SCOPE...

CONST :
Creates a Constant.
Available since ES6.
Allows us to create variable within BLOCK SCOPE...

Now we have learned up till now that let and const lets us create variable within functions and global scope, but that not what they do, instead these functionalities are of VAR.

We will learn about it in a while..

*/

---------------------------------------------------------------------------------

// BLOCK SCOPE...

// We will practice it within the empty app.js file.

// We learned about Local & Global Scope.

let name = "MAX";
function greet() {
  let age = 30;
  let name = "MANUEL"; //this is a shadow variable which will replace the global variable only within the function.
  console.log(name, age);
}

console.log(name, age);

// Well here the age variable won't be seen within console as it is within the function and works only from inside.

greet();

// We could replace let with VAR and we would not see any difference.

var name = 'MAX';
var name = "ANNA";
console.log(name);

// Here we won't see any error when we redeclared the name, we would see the name ANNA in the console. A minor difference here between let and var.

// We will notice some difference here....

if (name === 'Max'){
  var hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

function greet() {
  var age = 30;
  var name = "MANUEL";
  console.log(name, age);
}

console.log(name,hobbies);

greet();

// This is an if statement and not a function...

// We print the array within the console. 
// Then we print the global var name and the hobbies and then we called the function greet so we will see the appropriate message..

// Here hobbies is now a global variable. It is wihtin the if statement and not in any function. We can also include var hobbies within the functions as we can access global variables anywhere...

// Now let us change the var within the if statement and yes it will output the console with the if conditions, but then for the...
console.log(name,hobbies); // it will show undeclared.

// We know that for let-var-const = created within function won't work on the global and created with global will work everywhere, then why the error for let?

// It is because let and const DON'T CARE about the functions but the care about the curly braces {} - which functions as well as IF statements have.
// SIDE NOTE - We are not talking about the {} which we create for OBJECTS, simply cause we cannot create a variable within the object's {}.

-------------------------------------------------------------------------

// The variable within any blocked space (which is created by {} ) will be scoped within that block.

// That is how the let here works only for the if block..
// If we wanna access the hobbies variable throughout the code, we could create this on the main scope...

let hobbies;

// Then we can give values to it within blocks and avoid issues which we faced with VAR.

// That is why with new JS we work with let and const, as they force us to write cleaner code.

// This also clears our intentions as being a dev, we would not create a variable within a block and then call it globally.

// Now we would be thinking why JS allows VAR at all. Well, many old scripts has worked with VAR, so if JS clears it out, all those scripts would stop working.


------------------------------------------------------------------------------------


// 3. Understanding HOISTING...

// Another example why JS changed from var to let-const...

// It is how JS reads and initialize variable created with var vs variable created with let-const.

// We create a variable with var but we will put it below the command of console.log, as JS reads up to down, we expect an error

console.log(userName);

var userName = "MAX";
// This should show an error but shows undefined within the console.
// let-const will show an actual error.


// Now we get an error with let-const but not with var, why is that?

// JS has a feature called HOISTING, which means when the script is loaded it looks from top to bottom and stores functions in the top as we learned before but here it does so the same with var..

var userName; //It DECLARES & gives the initial value of undefined.
console.log(userName);
username = "MAX"; // this stays without the var call sign.

// This happens to let-const too but JS declares them and as the userName isn't initialized above the console, JS will show the error of uninitialized...

// IMP -  It is not that we should use this in our code as it will only confuse us.
// So it is imp to declare a variable with value, before we use it.


----------------------------------------------------------------------------


// 4. STRICT MODE & Writing GOOD CODE....

// In a script we may just write the code....(WHICH IS A MISTAKE AND WE SHOULD NEVER PRACTICE IT THIS WAY.)

userName = "MAX";
// We didn't declare this to anything. As in we didn't assign var or let or const to this variable. Which may turn this variable into an error within the console.

// But as we know JS is a loosely typed language which is forgiving around scenarios. In the console we will see MAX. Which might be confusing when the script is large and been worked on by a team.

// To solve this, we must turn on the STRICT MODE.
// Donot prefer strict mode everytime...
// Strict mode will prevent JS to do this kinda things.
// We can turn on strict mode on a script or within a function.
// To turn it on we must use " use strict ".

'use strict';
userName = "MAX";

// With this we will see undefined error within Console.

// IMP NOTE - We cannot assign the name of a property of JS to a variable, yes with VAR there won't be any error but with let-const there will be an error. EG...

let undefined = 4; //will view error within console..
var undefined = 3; //Will not preview error within console. So to clear this mistake we must use strict mode.

// Not that we wanna practice these problems within our projects. But we learned this as it is a part of JS....


-------------------------------------------------------------------------------------


// 5. How Code is PARSED & COMPILED....

// LINKS RELATED -

// https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef

// https://firefox-source-docs.mozilla.org/js/index.html

// To open any link within the comment, hover over the cursor and click the link while pressing CTRL.


// What does browser do with this code or what it does to show our code on screen...
const name = 'Max';
alert (name);

// It will execute our script which is imported with the HTML code, be it inline code or within the head...
// Now it will differ with browser to browser on what they do with the code to execute it and to go in deep the links above will stand helpful..

// Browsers Parse & Execute our Code.

// Parsing - The browser Reads and Loads..
// Execution - The process where our code has an effect.

// The browsers have engines which does parsing and execution of the code.

// For Chrome - V8 Engine, for Firefox - SpiderMonkey.

// The Engines consists of 2 parts.

// INTERPRETER - Loads our scripts, Reads it and then Translates it to Byte Code which is easier to execute. Starts Execution. 

// COMPILER (JIT - Just In Time) - As an Interpreter starts executing our code line by line, the process takes time and is unoptimized. To get a faster performance the browser uses Compiler to compile the code into machine code and hands it off to the OS or the machine. 
// Translation from a JS code to Machine Code is what a Compiler does..

// Interpreter -> Starts Execution -> Hands Byte Code -> Compiler.

// JIT - Just In Time - The Compiler starts Compiling + Executing the compiled code whilst the code is being READ/EXECUTED.
// This happens side by side with the interpreter.

// Compiled Machine Code -> Computer -> Execution

---------------------------------------------------------------------------------

// Browser API :

// APIs - Learn about API in further lectures...

// These are built in JS which works as communication bridges between JS and logic.

// API are built into browser which we can call from JS.


--------------------------------------------------------------------------------------


// 6. Inside JS Engine - How The Code EXECUTES.....

// If we zoom into our code execution, how does that works?

// Inside the JS engine -  the thing that executes our code.

// Here it is all about Managing Memory and Managing Execution Steps.

// Here we have 2 Concepts - HEAP & STACK.
// Look for PDF within the folder for more info.

// HEAP - Our Long Term Memory. It is about Memory Allocation. Browser stores our data in our system memory and manages access to it.
// Browser manages HEAP.

// STACK - Important for execution of our code. Of course the data is also important for that. Stack is kinda Short Term Memory.
// Execution Context - Stack manages our program flow - Function Calls & Communication.
// Stack keeps control over which function is currently executing. It also controls that if a function returns, which function it is returning data to...

-------------------------------------------------------------------------------------

// Example and a new project...

// We wanna take a look at the behind the scenes performance...

// We will create a series of code...

function getName() {
  return prompt("Your Name: ", "");
}

function greet() {
  const userName = getName();
  console.log("Hello " + userName);
}

// We could say JS stores these functions in the HEAP as these function has long life because they could be called multiple times within the program and they live as long as we do something in our application..

greet();

// As we open the page within browser and type the name, in the console, it will show the name writen within the prompt box. So what does it have to do with Stack and Heap?

// Functions are stored within Heap. The browsers stores them.

// When the code runs Stack becomes active, in short browser pushes stuff into Stack. As stack is basically our short term memory. Whereas Heap is our long term memory.

// Now in the stack there happens an anonymous code execution which basically is our script. It is like a big gigantic function which we didn't assign a name. Obviously our script has a name but within this process it remains anonymous.

// When the whole script is executed which means the greet() is executed when we call it.

// Therefore JS moves the greet() function to the Stack.
// Stack in the end is a Data Structure, a short living data structure where our functions executions are stored.

// The browser & JS engines keeps tracks of what's currently happening and Stack is simply populated by pushing new function calls or new short living data on top of it and letting it off when it isn't required.


// So we started with overall script execution, the anonymous function and in there we call greet() hence it will be pushed as the topmost item in the Stack.

// The topmost item in the stack is the thing which is currently happening.

// Let's see within the greet() - we create a variable which is created by calling another function, getName().

// Now JS engine pushes the execution of getName() to the top of the stack. Therefore it now knows that this is the currently running function.

// STACK 
// anonymous (our script) -> greet() -> getName()

// In getName() we called prompt() - which is the function within JS. So promt will be pushed on top of the stack. 

// The more functions we call, the more they will get pushed onto the stack.

// In prompt when we type the name it will return that value to getName() thus ending the prompt function. Thus prompt will be removed from the Stack because it is done...

// This doesn't mean the function definition is removed from the heap. 

// The execution context is removed from the Stack.

// getName() after returning the value to greet() will also be popped off from the Stack.

// As greet() is done it will be removed and we will have our script which is wrapped with a large function which is anonymous.

------------------------------------------------------------------------

// We know JS is SINGLE-THREADED = One thing happens at a time..

// This is what happened within Stack, it called one thing - function at a time.

// The modern Browsers have a thing called EVENT LOOP.

// It helps us with things like event listeners.
// We'll dive into event loop when we have learned about asynchronous code within JS.

// For event listeners, the browser manages them and when they are in use, it gives JS engine a ping... We will learn about it later cause to be honest I don't understand this shit...


--------------------------------------------------------------------------------------


// 7. Primitive VS Reference Values...

// We have learned about Booleans, objects, strings, numbers and so on. Well, they can be categorized within 2 types...

/*

Primitive Values :-

Strings, Numbers, Booleans, null, undefined, Symbol(learn about it later)

For eg, every number that we create in a variable will be stored within the browser & JS as a primitive value.

As these are relatively short living, these are stored on Stack.
These are cheap to be recreated or duplicated.

These can also be stored in the Heap where there is long running operation.

We have seen so many times when we assign a value of one variable to the other.. Let's understand with an example.

let name = 'Max';

let anotherName = name; 
Here we gave this variable the value of upper variable.
But when we do this....

name = 'James';

anotherName value will still be "Max", cause JS copied the value of the first variable assigned to other and made a duplicate for the another variable...

Copying a Variable (Assign to different variable) - Copies the Value...

*/

--------------------------------------------------------------------------

/*

Reference Values :-

All other OBJECTS ("more expensive to create")

String-numbers are not objects but are dynamically transformed to psuedo objects. 
In Short, JS transforms any Primitive Value to an object when we put forth the dot notation. 

Objects are very memory consuming when created and will require more storage, therefore browser typically stores them in the Heap.

A variable stores a pointer - address - or simply a REFERENCE to the object or location in memory. For Primitive values, it stores the value itself.

Let's see with an example.

let hobbies = ['sports'];
let newHobbies = hobbies;
Which will show the hobbies' array.

hobbies.push('Cooking');
we pushed a new data within the array.

newHobbies;
this will show within the console as - ["sports","Cooking"]

We never changed the value of newHobbies but then too it took on the value for the hobbies..
Let's see about the objects.

let person = {age: 30};
let newPerson = person;
This will show the value of person in the console.

newPerson.age = 32;

person;
{age: 32}

We will get a new value for the person as we equalled it with the newPerson value.


This doesn't mean we cannot duplicate the object where in certain times we just want to store the initial value and not change it when the equal to value of the other variable is changed.

We will learn about this in further lecture but we shall take a look at it now...

let anotherperson = { ...person }
we will learn about the ... , which is a build in property within JS, later.]

... = Spread Operator

anotherperson;
{age: 32}
This will show the value of the person but we wanna create a duplicate one so....

person.age = 30;

And when we access the anotherperson value, 

anotherperson
{age: 32}
Thus we created a duplicate variable of the present PERSON, we will learn about it in deep later...

We can use this SPREAD OPERATOR ... method with arrays in similar method...

*/

------------------------------------------------------------------------------------------

// When working with Reference types, we can take a look at an example which we studies earlier in the BOOLEAN operator lecture about how 2 objects with similar values are different.

const person1 = {age: 30};
const person2 = {age: 30};

person1 === person2;
false
// This will show false within the console.

// Why? Because we compare the ADDRESS of both values which are not similar, that is what we learned with Reference Values.

// There is one more confusion with the Reference types as..

const hobbies = ["sports"];

hobbies.push("Cooking");
// As we know that hobbies is a constant where we cannot change the value.

hobbies
["sports","Cooking"]

// But when typed in console, the pushed value will be seen in the hobbies without any error.

// The reason is that the constant hobbies - value is not stored within the memory but rather the address is stored within the memory so we can push any new value within the hobbies constant.

// But we cannot change the hobbies to this as this isn't stored in the memory

hobbies = ["sports","running"]
// This will throw an error..
// Here we created a new address but with an already assigned variable hobbies, so there will be error.

// In short we can change the data within the memory of the Reference Values but we cannot change the variable/constant itself as they are stored as an address within the memory...


----------------------------------------------------------------------------------------------------


// 8. Garbage Collection & Memory Management

/*

Links -

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management

https://v8.dev/blog/free-garbage-collection

*/

// We can keep Stack aside but how the memory in Heap is managed by the browser?

// The system allocates some memory to the browser and the browser has it's own internal memory management.
// In cases where our website are super 3D calculation based, where the browser can't manage the application, it will terminate the site. 

// But how the memory is managed within browsers..

// There is a thing called GARBAGE COLLECTOR.

// Every JS Engine has one for eg. V8 garbage collector for Chrome.

// We have the link for how the V8 garbage collector works above.


// Garbage Collector periodically checks Heap for unused objects (objects without references), the ones with addresses stored in variables.
// It Removes Unused Objects...

// Simply explained - if we are not using the variable or if the value of that variable is nullified, the garbage collector will kick those off...

// The Garbage Collector will do the clearing with it's own algorithm. 

----------------------------------------------------------------------------------

// We should be aware of MEMORY LEAKS where we have some variable or some place in our code where we still hold some reference to, but we don't take interest in that thing.

// We can look at the example within the app.js

// We can see within the webpage that there are 2 buttons.

// We type something in the text bar and press click me. When we see within the console there won't be any activity.
// We click onto Add a listener to other button, and then we press click me we will see activity within the console.

// But after that when we press the add listener button it will do no function, we can change the text and just press click me and we can see that particular text within the console...

// Here we can see within app.js - the click me is linked to the add listener which then executes the function, so we might think we have to click both to execute the function but JS and the browser are smart to replace the other listener with a new one. Which then allows us to execute that function flawlessly with the click me option...

// This is how it fixes memory leaks.

// As so many eventlisteners could be attached to a object which will result in the crash or inappropriate behaviour.. This fixes that...

// This isn't a magical tool that can rule out every error but we will learn about this later...


------------------------------------------------------------------------------------


// MODULE FINISHED