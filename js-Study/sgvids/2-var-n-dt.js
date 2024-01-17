//tell the computer to remember something
//Declaring a variable & Assigning a value
//so far, string num boolean null and undefined
var name ="Chris";

name ="Ricky";
console.log(name);

//cool, but if we want to add things together, as in stick one on the end of the other?
//Well, that's called concatenation
name = name + " " + "Bobby";
console.log(name);

id = 7 + 3;
console.log(id);

//Cool cool, but there are also complex datatypes, like ARRAYS:

var fiveDs;
fiveDs = ["Dodge", "Duck", "Dip", "Dive", "Dodge"];
//an ARRAY is a numbered list. It can hold lists of objects too, not just simple values. It also has properties, meaning you can do this with it:
console.log (fiveDs.length);
//You can fetch informatrion about this array now.
console.log (fiveDs[0] + " " + fiveDs[2]);