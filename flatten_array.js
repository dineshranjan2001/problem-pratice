const array=[1,[2,[3,4]],5];

// 1st way
const getFlattenArray=(array)=>{
    const result=[];
    for(let arr of array){
        if(Array.isArray(arr)){
            result.push(...getFlattenArray(arr));
        }else{
            result.push(arr);
        }
    }
    return result;
}
const flattenArray=getFlattenArray(array);
console.log(flattenArray);


// 2nd way using flat function
const getFlattenArray1=(arr)=>{
    return arr.flat(Infinity);
}
const flattenArray1=getFlattenArray1(array);
console.log(flattenArray1);