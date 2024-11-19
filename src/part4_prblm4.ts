{
  /*
    Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

    // Sample Input 1:
reverseArray(["apple", "banana", "cherry"])

// Sample Output 1:
["cherry", "banana", "apple"]

// Sample Input 2:
reverseArray([10, 20, 30])

// Sample Output 2: 
[30, 20, 10]
    */
}
// function reverseArray<T>(a:Array<T>){
function reverseArray<T>(a:T[]):T[]{
    // console.log(a.reverse())
    return a.reverse();
}
// reverseArray<number>([10, 20, 30])
console.log(reverseArray<number>([10, 20, 30]))
// reverseArray<string>(["apple", "banana", "cherry"])
console.log(reverseArray<string>(["apple", "banana", "cherry"]))
