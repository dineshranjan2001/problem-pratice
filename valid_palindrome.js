//Valid Palindrome: Check if a string reads the same forward and backward after removing non-alphanumeric characters.

const nonAlphaNumbericString = 'a$a*c(c)a#a';

const checkValidPalindrome = (string) => {
    const regex = /[^a-zA-Z0-9 ]/g;
    const validString = string.replace(regex, '').trim();
    return (validString === validString.split('').reverse().join('')) ? true : false;

}
console.log(checkValidPalindrome(nonAlphaNumbericString));

const checkValidPalindrome1 = (string) => {
    const regex = /[^a-zA-Z0-9 ]/g;
    let i = 0;
    let j = string.length - 1;
    while (i < j) {
        while (i < j && regex.test(string[i])) {
            i++;
        }

        while (i < j && regex.test(string[j])) {
            j--
        }

        if (string[i].toLowerCase() !== string[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

console.log(checkValidPalindrome1(nonAlphaNumbericString));