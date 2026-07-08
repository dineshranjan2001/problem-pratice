/*
    let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
    o/p= gee
    let arr=["flower", "flow", "flight"];
    o/p=fl
*/

let arr=["flower", "flow", "flight"];

// 1st way
const checkLongestCommonPrefix=(arr)=>{

    let minIndexValueLength=arr[0].length;
    for(let str of arr){
        minIndexValueLength=Math.min(minIndexValueLength,str.length);
    }
    let prefix=[];
    for(let i=0;i<=minIndexValueLength;i++){
        let char=arr[0][i];
        for(let str of arr){
            if(str[i]!==char){
                return prefix.join('')
            }
        }
        prefix.push(char);
    }
    return prefix.join('');
}

console.log(checkLongestCommonPrefix(arr));


// 2nd way
const checkLongestCommonPrefix1=(arr)=>{
    arr.sort();

    const firstArray=arr[0];
    const lastArray=arr[arr.length-1];
    const minLength=Math.min(firstArray.length,lastArray.length);
    let i=0;
    while(i<minLength && firstArray[i]===lastArray[i]){
        i++;
    }
    return firstArray.substring(0,i);
}
console.log(checkLongestCommonPrefix1(arr));
