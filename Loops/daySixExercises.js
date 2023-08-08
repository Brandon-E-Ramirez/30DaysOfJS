//*Helper functions
let log = console.log
// Iterate 10 to 0 using for loop, do the same using while and do while loop
let str = ""
for(let i = 0; i <= 10; i++){
    str += i + ' '
}
log(str)
//? how to do whith while?
let zeroToTen = ''
t = 0
while(t <= 10){
    zeroToTen += t + ' '
    t++
}
log(zeroToTen)

let doTen = ''
let k = 0
do{
doTen += k + ' '
k++
}while(k <= 10)
log(doTen)

//* Iterate 0 to n using for loop
let n = 5;
let numStr = ''
for(let g = 0; g <= n; g++){
numStr += g + ' '
}
log(numStr)

//* Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######

let char = '#'
let m = 10;
for(let u = 1; u <= m; u++){
    log(char.repeat(u))
}

//* Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

let index = 0;
do{
log(`${index} x ${index} = ${index*index} `)
index++
}while(index <=10)

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000

// Use for loop to iterate from 0 to 100 and print only even numbers

// Use for loop to iterate from 0 to 100 and print only odd numbers

// Use for loop to iterate from 0 to 100 and print only prime numbers

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

//   [2550, 2500]

// Develop a small script which generate array of 5 random numbers

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

//TODO Create a script for making a password using an array of symbols, the alphabet and numbers 0-9. User must 
//TODO be able to specify length. If character is from the alph array there is a 50/50 chance it will be lowercase

let length = 100; //*length of the password
const sym = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=']
const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] //*all alphabet characters in lower case
const nums = [0,1,2,3,4,5,6,7,8,9]

let pw = ''
let symLength = sym.length;
let alphLength = alph.length;
let numsLength = nums.length;

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

for(let x = 0; x <= length; x++){
//TODO choose element type
//* Generate random number to decide if next character will be a symbol, letter, or number
let option = randomIntFromInterval(1,3)
let index;
switch(option){
    case 1://reserved for symbols
    //*decide which element in chosen array will be the next in pw
    index = randomIntFromInterval(0, symLength - 1)
    pw += sym[index];    
    break;
    
    case 2://resrved for alphabet
    //*decide which element in chosen array will be the next in pw
    index = randomIntFromInterval(0, alphLength - 1);
    //*if element is a letter, make it a 50/50 chance it will be upperCase
    let upperCse = randomIntFromInterval(0,1)
    if(upperCse){
        pw+= alph[index];
    }else{
        pw+= alph[index].toUpperCase();
    }    
    break;
    
    case 3://reserved for numbers
    //*decide which element in chosen array will be the next in pw
    index = randomIntFromInterval(0, numsLength - 1)
    pw += nums[index]
    break;

    default:
        log('There is an error!')
}
}

log(pw)
log('********************************End of script********************************')






























