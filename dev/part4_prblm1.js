"use strict";
{
    //https://github.com/Apollo-Level2-Web-Dev/batch3-assignment-1
    /*
    Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
    
    // Sample Input:
    repeatString("Hello!", 3)
    
    // Sample Output:
    "Hello!Hello!Hello!"
    
    */
    function repeatString(a, b) {
        // for(let i=0;i<b;i++){
        //     console.log(a);
        // }
        return a.repeat(b);
    }
    // repeatString("hi",3);
    console.log(repeatString("Hello!", 3));
    //15 min done
}
