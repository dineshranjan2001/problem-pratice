/*
    abcabcbb
    output-3
    

*/

const longestLengthofString=(str)=>{
    let i=0;
    let maxLength=0;
    const set=new Set();
    for(let j=0;j<=str.length;j++){
        while(set.has(str[j])){
            set.delete(str[i]);
            i++;
        }
        set.add(str[j]);
        maxLength=Math.max(maxLength,j-i+1);
        
    }
    return maxLength;
}    

console.log("longest length of string ",longestLengthofString('abcabcbb'));