function fizzBuzz(n) {
    if(n % 3 === 0){
        console.log('FizzBuzz');
    } else if(n % 9 === 0 && n % 3 !== 0){
        console.log('Fizz');
    } else if(n % 10 === 0){
        console.log('Buzz');
    } else  {
        console.log(7);
    }
  }
  
  fizzBuzz(15); // Should print "FizzBuzz"
  fizzBuzz(9);  // Should print "Fizz"
  fizzBuzz(10); // Should print "Buzz"
  fizzBuzz(7);  // Should print 7

  function reverseString(str) {
    let reversed = "";  
    let i = str.length - 1;  

    while (i >= 0) {  
        reversed += str[i];  
        i--;  
    }

    return reversed;  
}


console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow"

function countDigits(num) {
    let numStr = num.toString(); 
    return numStr.length; 
}

console.log(countDigits(12345)); // Expected output: 5
console.log(countDigits(987)); // Expected output: 3

  
function multiplyUntil1000(num) {
    // Your code here
    while (num < 1000) {
        num *= 2;
    }
    return num;
  }
  
  console.log(multiplyUntil1000(5)); // Expected output: 1280
  console.log(multiplyUntil1000(500)); // Expected output: 1000


  function reverseCountdown(n) {
  // Your code here
  while (n >= 0) {
    console.log(n);
    n--;
  }
  return n;
}

reverseCountdown(5);  
reverseCountdown(44); 
// Expected output:
// 5
// 4
// 3
// 2
// 1


function magicMirror(word) {
    // Your code here
    if (word === 'mirror') {
        return '👀';
    } 
    return 'not a mirror';
  }
  
  console.log(magicMirror("mirror")); // Expected output: 👀
  console.log(magicMirror("glass")); // Expected output: Not a mirror
  

  function isPowerOfThree(num) {
    if (num <= 0) return false;
    while (num % 3 === 0) {  
        num /= 3;  
    }
    return num === 1; 
}

console.log(isPowerOfThree(9));  // Expected output: true (3^2)
console.log(isPowerOfThree(10)); // Expected output: false
function isDoubleDigit(num) {
    if (num.toString().length === 2) {
        return true;
    }
    return false; 
}
  
  console.log(isDoubleDigit(45)); // Expected output: true
  console.log(isDoubleDigit(9)); // Expected output: false 
  console.log(isDoubleDigit(100)); // Expected output: false
  console.log(isDoubleDigit(44));
  
  function countVowels(str) {
    // Your code here
    const includes = ['a', 'e', 'i', 'y', 'o'];

    
}

console.log(countVowels("hello")); // Expected output: 2 (e, o)
console.log(countVowels("world")); // Expected output: 1 (o)
