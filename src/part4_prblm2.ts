/*
Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

// Sample Input:
findLargestNumber([10, 5, 8, 20, 3])

// Sample Output:
20
*/
function findLargestNumber<T>(a:Array<T>){
    let max = a[0];
    for(let i=0;i<a.length;i++){
        // console.log(a[i]);
        if(a[i]>max){
            max = a[i];
        }
    }
    return max;
}
// console.log(findLargestNumber<number>([1,2,3,4,88,4,33]))
console.log(findLargestNumber([10, 5, 8, 20, 3]))

const findLargestNumber2 = (nums:number[])=>{
    return Math.max(...nums);
}
const maxNumber = findLargestNumber2([10, 5, 8, 20, 3,88,56,34])
console.log(maxNumber)