"use strict";
{
    /*
    Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.
    
    // Sample Input 1:
    logString("Hello, TypeScript!");
    
    // Sample Output 1:
    "Hello, TypeScript!"
    
    // Sample Input 2:
    logString(42)
    
    // Output: Error:
    Input is not a string.
    */
    // function logString<T>(str:<T>){
    function logString(str) {
        if (typeof (str) === "string") {
            console.log(str);
        }
    }
    logString("hi");
}