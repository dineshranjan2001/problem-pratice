const arr = [4, 2, 10, 7, 5];

// using for loop
let max1=0;
let max2=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max1){
        max2=max1;
        max1=arr[i];
    }else if(arr[i]>max2 && max2!==max1){
        max2=arr[i];
    }
}
console.log(max2);

// using reduce
const highestNumber=arr.reduce((acc,current)=>{
    if(current>acc.max1){
        acc.max2=acc.max1;
        acc.max1=current;
    }else if(current>acc.max2 && acc.max2!==acc.max1){
        acc.max2=current;
    }
    return acc;
},{max1:0,max2:0});

console.log("using reduce the 2nd highest number from the array ",highestNumber.max2);