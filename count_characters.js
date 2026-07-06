const string='hello';
/*
output
{
 h:1,
 e:1,
 l:2,
 o:1
}
*/

const result={};
for(let char of string){
    result[char]=(result[char] || 0) +1 
}
console.log(result);