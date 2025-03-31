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
    // Your code here
    
  }
  
  console.log(countDigits(12345)); // 5
  console.log(countDigits(7));     // 1
  console.log(countDigits(987654)); // 6
  