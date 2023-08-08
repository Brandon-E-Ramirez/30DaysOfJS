/*
    Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
    Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
    Check if 'on' is found in both python and jargon
    I hope this course is not full of jargon. Check if jargon is in the sentence.
    Generate a random number between 0 and 100 inclusively.
    Generate a random number between 50 and 100 inclusively.
    Generate a random number between 0 and 255 inclusively.
    Access the 'JavaScript' string characters using a random number.
    Use console.log() and escape characters to print the following pattern.
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/ 
let ten = parseInt(10)
console.log((typeof 10) == typeof ten)
console.log(Math.ceil(parseFloat('9.8')) == 10)
let j ='jargon'
let p = 'python'
let search = 'on'
console.log(j.includes(search) && p.includes(search))
let $sentence = 'I hope this course is not full of jargon.'
console.log($sentence.includes('jargon'))
console.log(Math.ceil(Math.random() * 100))

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  console.log(getRndInteger(50, 100))
  console.log(getRndInteger(0, 255))
  let js = 'JavaScript'
  console.log(js.charAt(Math.ceil(Math.random() * 10)))
 
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.split('because because because'))