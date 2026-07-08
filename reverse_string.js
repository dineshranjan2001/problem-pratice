const string="Dinesh";
let reverseString="";

// 1st way
reverseString=string.split('').reverse().join('');
console.log(reverseString);

//2nd way
let reverseString1="";
for(let i=string.length-1;i>=0;i--){
    reverseString1+=string[i]
}
console.log(reverseString1);

//3rd way
// two pointer approach
const reverseStringFn=(string)=>{
    // [a,b,c]
    const chars=string.split('');
    let i=0;
    let j=chars.length-1;
    while(j>=i){
        const temp=chars[i];
        chars[i]=chars[j];
        chars[j]=temp;
        j--;
        i++;
    }
    return chars.join('');
}
console.log(reverseStringFn(string));