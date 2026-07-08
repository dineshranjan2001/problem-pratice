//Valid Palindrome: Check if a string reads the same forward and backward after removing non-alphanumeric characters.

const nonAlphaNumbericString = 'a$a*c(c)a#b';

const checkValidPalindrome = (string) => {
    const regex = /[^a-zA-Z0-9 ]/g;
    const validString = string.replace(regex,'').trim();
    return (validString===validString.split('').reverse().join(''))? true : false;
    
}

console.log(checkValidPalindrome(nonAlphaNumbericString));