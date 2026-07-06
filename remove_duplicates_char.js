let duplicateString="catcat";

//1st way
const charArray=duplicateString.split('');
const uniqueCharArray=[];
charArray.forEach((char)=>{
    if(!uniqueCharArray.includes(char)){
        uniqueCharArray.push(char);
    }
});
console.log(uniqueCharArray.join(''))

//2nd way
//1st way to remove duplicate chars from a string using two pointer approach
const chars=duplicateString.split('');
const check={};
let writeIndex=0;
for(let readIndex=0;readIndex<=chars.length;readIndex++){
    let char=chars[readIndex];
    if(!check[char]){
        check[char]=true;
        chars[writeIndex]=char;
        writeIndex++;
    }
}

chars.length=writeIndex;
console.log(chars.join(''));

//2nd way to remove duplicate chars from a string using two pointer approach
const chars1=duplicateString.split('');
let i=0;
for(let j=1;j<chars1.length;j++){
    if(chars1[j]!==chars1[i]){
        i++;
        chars1[i]=chars1[j];
    }
}
chars1.length=i+1;
console.log(chars.join(''));