var first_name = "Ricky";
var last_name = "Bobby";
var age = 45;
var first = true;
var last = false;
var bob;

//Falsey
//False, null, undefined, 0, "", '', NaN

if( age <= 40){
    //do something if value of age is less than or equal to 40
}else if( age > 40 && age < 50 ){
    //do something if value of age is between 40 and 50
    //&& = what this means is "AND". Basically, you can pass two conditions/arguments into a formula, and state whether one or both should trigger a given block of code. 
};  //|| = what this means is "OR" Meaning one has to be true for the thing to run.
//Interesting thing about "OR" - How it works is it checks for one "true" among the arguments. It reads these from left to right. When it finds a true 
//argument, the code block runs, and the code moves on. 

//Also, you should really wrap your individual arguments in parentheses. 
if(age <= 40){

}else if( (age > 40) && (age < 50) ) {

}else if( age < 0){
    //otherwise prevent something from happening
}else{}
//Better! Ooooh look at the pretty colours.

//COMPARISON OPERATORS
// < <= > >= == != ! ===
if( !first ){

};