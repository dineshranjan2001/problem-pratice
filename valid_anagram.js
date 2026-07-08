/*
Determine if one string is a permutation of another using a character frequency hash map.

To determine if two strings are valid anagrams, 
check if both have the same length and contain the exact same characters in identical quantities
e.g., "anagram" and "nagaram"

*/
const string1 = 'anagram';
const string2 = 'nagaram';

// 1st way
const checkValidAnagram = (str1, str2) => {
    const sortedStr1=str1.split('').sort().join('');
    const sortedStr2=str2.split('').sort().join('');
    if ((str1.length === str2.length) && (sortedStr1 === sortedStr2)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkValidAnagram(string1,string2));

//2nd way
const checkValidAnagram1=(str1,str2)=>{
    if(str1.length!==str2.length) return false;

    const charCount={};
    for(let ch of str1){
        charCount[ch]=(charCount[ch] || 0)+1;
    }

    for(let ch of str2){
        charCount[ch]=(charCount[ch] || 0)-1;
    }

    for(let count in charCount){
        if(charCount[count]!==0){
            return false;
        }
    }

    return true;
}
console.log(checkValidAnagram1(string1,string2));
