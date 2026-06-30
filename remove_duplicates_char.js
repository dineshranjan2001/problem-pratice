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