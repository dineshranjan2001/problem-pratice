const arr = [1,2,2,3,4,4,5];

const uniqueArr=[];
arr.forEach((ele)=>{
    if(!uniqueArr.includes(ele)){
        uniqueArr.push(ele);
    }
});
console.log(uniqueArr);

// using set
const uniqueArr1=[...new Set(arr)];
console.log(uniqueArr1);


// without create new array remove the duplicates

// first sort the array in acesending order.
arr.sort((a,b)=>a-b);

let writeIndex=1;

// compare with previous index and next index of array
for(let readIndex=1;readIndex<arr.length;readIndex++){
    if(arr[readIndex]!==arr[readIndex-1]){
        arr[writeIndex]=arr[readIndex];
        writeIndex++;
    }
}

// reduce the original array's length with new writeIndex value
arr.length=writeIndex;
console.log(arr);
