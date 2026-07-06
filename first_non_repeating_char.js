const string='aabbcdde'
// output c

let missingChar='';
for(let char of string){
    if(string.indexOf(char)===string.lastIndexOf(char)){
        missingChar=char;
        break;
    }
}
console.log(missingChar);

// in a optimized way

const freq={};
for(let char of string){
    freq[char]=(freq[char] || 0) +1
}

let nonRepeatChar='';
for(let char of string){
    if(freq[char]===1){
        nonRepeatChar=char;
        break;
    }
}
console.log(nonRepeatChar);