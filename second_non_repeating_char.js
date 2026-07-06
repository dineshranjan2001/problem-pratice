const string='aabbcfdde';

let count=0;
let secondMissingChar='';
const freq={};
for(let char of string){
    freq[char]=(freq[char] || 0)+1;
}

for(let char of string){
    if(freq[char]===1){
        count++;
        if(count===2){
            secondMissingChar=char;
            break;
        }
    }
}

console.log(secondMissingChar);