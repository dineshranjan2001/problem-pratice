const arr=[1,2,3,5]

const findMissingNumber=(arr)=>{
    const num=arr.length+1;
    const total= num*(num+1)/2;
    const sum=arr.reduce((sum,num)=>sum+num,0);
    return total-sum;
}

const missingNumber=findMissingNumber(arr);
console.log(missingNumber);