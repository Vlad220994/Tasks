const str1 = 'Иди';
const str2 = 'А роза упала на лапу Азора';
const str3 = 'Человек';

function isPalindrom(str) {
  let str1 = str.toLowerCase();
  let str2 = str1.split('').reverse().join('').toLowerCase();
  
  return str1 === str2;
}

console.log(isPalindrom(str1));
console.log(isPalindrom(str2));
console.log(isPalindrom(str3));
