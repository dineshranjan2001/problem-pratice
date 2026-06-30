// find the largest number from the array
// here 10 is the highest number.
const arr = [4, 2, 10, 7, 5];

// using for loop
let highestNumber=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>highestNumber){
        highestNumber=arr[i];
    }
}
console.log(highestNumber)

// using reduce function
const highestNumber1=arr.reduce((max,ele)=>{
    return ele>max?ele:max
},0);
console.log(highestNumber1);

// using Math.max function.
const highestNumber2=Math.max(...arr);
console.log(highestNumber2);


