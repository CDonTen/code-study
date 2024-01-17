// tell the computer to do something
var name; //variables are like boxes you hold things in. We have named our box, "name". Currently, the box only exists: it does not have anything in it. 
var name = "Steve"; //Now there is something in it.
var id = 234234; //Now we have another box! Do wonders never cease?
var alive = true; //And a third, satisfying a deft rule of three. Masterful gambit, sir. 

//BRING THE BEAT BACK

var name = "Steve"; //This data type is known as a string. That means alphabet letters. 
var id = 234234; //This is a number because of the way it is.
var alive = true; //This is a Boolean. It can be true or false.

console.log("Hello World!"); // the anatomy of this line is object.method(parameters). The whole thing is 
//called an object, the middle part is the method, or how something/what thing is being done to it, and the 
//parameters are what limits or specs you set in regard to the method being performed on the object. The limits can be variables too!

//What if I wanted to change one of the values of my variables?
//Do this:
alive = false;
id = 7;
name = "john";
//This is not creating a new variable - This is taking an existing variable (which is indicated by the absence of a "var" element(method?) )
//And replacing the "contents" of the "Box". 
//This is known as "ASSIGNING" new values. 

console.log(name);
console.log(id);
console.log(alive);

//NOTE: What we did at the top of this file is known as "DECLARING AND ASSIGNING"

//You can also simply "DECLARE" a variable.
var x;
//Have an extra empty box on hand, as it were. 
x = null;
console.log(x);