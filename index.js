/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/


// Data Types --> Data Types are essentially key words that are used to create programming functions, here are a few examples:

// Numbers --> The "Numbers" data type typically refers to any whole number and decimal number.
// 5
// 5.5
// 10.4563534345

// Strings --> Like the "Numbers" data type, the "String" data type refers to any characters/words instead of numbers.
// "Hello World"
// 'Hello World'

// Boolean --> The "Boolean" data type refers to if a statement/function is 'true' or 'false'.
// True
// False
// 3 > 2
// 2 > 3

// undefined --> The "undefined" data type refers to the lack of an assigned value.

// null --> not existing, meaning that it has no value.

// let = Used for creating new Variables

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

// Variables --> Variables are essentially containers that store information, also referred to as "Values", they are done so using under a name/title given by the programmer/developer

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR CODE HERE */

let result = 12 * 20

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* WRITE YOUR CODE HERE */

let x = 12

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/


/* WRITE YOUR CODE HERE */
let name = "John Doe"

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

/* WRITE YOUR CODE HERE */
let ex6result = 12 * 2

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* WRITE YOUR CODE HERE */
let name = "john"
let name2 = "John"
console.log(name1 === name2)

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* WRITE YOUR CODE HERE */
x = 6
if (x === 1)
    console.long("one")
else if (x === 2)
    console.log("two")
    
//another method 

switch (x){
    case 1: console.log("one"); break;
    case 1: console.log("two"); break;
defualt: console.log("This works for numbers between 1 to 9 (included")
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* WRITE YOUR CODE HERE */
let TernaryExample = x > 10 ? true : false



/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/