// find the smallest number from the array
// here 2 is the smallest number.
const arr = [4, 2, 10, 7, 5];

// using for loop
let smallestNumber=arr[0];
for(let i=0;i<arr.length;i++){
    if(smallestNumber>arr[i]){
        smallestNumber=arr[i];
    }
}
console.log(smallestNumber)

// using reduce function
const highestNumber1=arr.reduce((min,ele)=>{
    return min>ele?ele:min

    // we can also the Math.min function in side the reduce function.
    //return Math.min(min,ele);
},arr[0]);
console.log(highestNumber1);

// using Math.max function.
const highestNumber2=Math.min(...arr);
console.log(highestNumber2);


