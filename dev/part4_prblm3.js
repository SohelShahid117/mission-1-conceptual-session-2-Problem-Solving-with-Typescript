"use strict";
{
    /*
      Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array
      // Sample Input:
      filterEvenNumbers([1, 2, 3, 4, 5, 6])
  
      // Sample Output:
      [2, 4, 6]
      */
    function filterEvenNumbers(a) {
        const evenNumber = [];
        for (let i = 0; i < a.length; i++) {
            if (a[i] % 2 == 0) {
                evenNumber.push(a[i]);
            }
        }
        return evenNumber;
    }
    const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6, 99, 88, 7, 54]);
    console.log(evenNumbers);
    function filterEvenNumbers2(numbr) {
        return numbr.filter((n) => n % 2 == 0);
    }
    let evnNmbr = filterEvenNumbers([7, 8, 9, 4, 88, 67, 45, 34]);
    console.log(evnNmbr);
}
