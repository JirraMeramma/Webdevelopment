let fact=1;
for(let a=1;a<=5;a++){
  fact=fact*a;
  console.log(fact)
}
// prime
function isPrimeForLoop(number) {
    if (number < 2) {
        return false; 
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true; 
}

console.log(`29 is prime (for loop): ${isPrimeForLoop(29)}`);
console.log(`15 is prime (for loop): ${isPrimeForLoop(15)}`);
// even
for (let j = 1; j <= 50; j++) {
    if (j % 2 === 0) {
        console.log(j); 
    }
}
// sum of all numbers
function sumArrayForLoop(numbers) {
    let sum = 0; 

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }

    return sum; 
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayForLoop(numbers));

// reverse string

function reverseString(input) {
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i]; 
    }
    return reversed; 
}
const Str = "hello";
console.log(reverseString(Str));

// fibonaccii series

function Fibonacci(terms) {
    if (terms <= 0) {
        return []; 
    }

    const fibonacci = [0]; 
    if (terms > 1) {
        fibonacci.push(1);
    }

    for (let i = 2; i < terms; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci; 
}
console.log(Fibonacci(5));

// pattern

function printPattern(rows) {
    let stars = ""; 
    for (let i = 1; i <= rows; i++) {
        stars += "*"; 
        console.log(stars); 
    }
}
console.log(printPattern(5)); 

// largest number
function findLargestNumber(numbers) {
    let largest = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
     return largest; 
}
console.log(findLargestNumber([3, 5, 7, 2, 8, 6])); 

// count vowels
function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if ('aeiouAEIOU'.indexOf(str[i]) !== -1) {
            count++;
        }
    }
     return count;
}
console.log(countVowels("Hello World")); 

// palindrome
function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return false; // 
        }
    }
    return true; 
}
console.log(isPalindrome("javascript"));
console.log(isPalindrome("hello")); 
console.log(isPalindrome("level")); 

// remove duplicates
function removeDuplicates(arr) {
    let ar= [];
    
    for (let i = 0; i < ar.length; i++) {
        if (!ar.includes(ar[i])) {
            ar.push(arr[i]);
        }
    }
    
    return ar;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// power of number

function power(base, exponent) {
    let result = 1; 
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    
    return result;
}
console.log(power(2, 3));
console.log(power(5, 4)); 

// bubble sort

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr; 
}
console.log(bubbleSort([5, 3, 8, 4, 2]));

// intersection

function findIntersection(arr1, arr2) {
    let intersection = []; 
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !intersection.includes(arr1[i])) {
            intersection.push(arr1[i]); 
        }
    }
    
    return intersection; 
}
console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

// tables

function generateMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}
generateMultiplicationTable(5); 
