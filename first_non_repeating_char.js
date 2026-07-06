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