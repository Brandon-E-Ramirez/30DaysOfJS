let word = 'JavaScript'
word[0] = '$'
word = word + " rules"
console.log(word);
console.log("hello brother")

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

let x = 4;
let y = 5;
let pow = Math.pow(x, y);
let answr = `The number: ${x}, to the power ${y} is: ${pow}`;
console.log(answr);

let string = 'JavaScript'
let firstLetter = string[0] 

console.log(firstLetter)           // J

let secondLetter = string[1]       // a
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)            // t

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t