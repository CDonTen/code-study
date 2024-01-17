var first_name = "Ricky";
var last_name = "Bobby";
var age = 45;
var first = true;
var last = false;



if( age == 45 ){//This is how "equal" is written in JS. two equal signs means equal, one means "store this in that"
    //Do something if true
}
else{
    //Do something if false
};

//JS would love to get to a "true/False" scenario every time , but there are a variety of values JS considers, "Falsey".
//Falsey numbers include: false, null, undefined, 0, "", '', NaN

// Now who gives a fuck?

//Well, an if statement runs if the value in the parentheses is "TRUE". It won't run if the value is "FALSE" or "FALSEY"

// If you do this:

if(last){

} else {

};
// This will not run, because "false" is a false value. 

//But if you do this:
if(first){

} else {

};
// This will run, because the value of "First" is "TRUE".