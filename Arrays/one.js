// Exercise: Level 1

const log = console.log

//     Declare an empty array;
const $arr = Array()
const array = new Array()
const arr = ["1"]
console.log(arr)
//     Declare an array with more than 5 number of elements
const nums = [1, 2, 3, 4, 5, 6, 7]
console.log(nums)
//     Find the length of your array
log(nums.length)
//     Get the first item, the middle item and the last item of the array

// let first, middle, last
// first = nums.indexOf(0)
// middle = nums.indexOf((nums.length)/2)
// last = nums.indexOf((nums.length))
// log(first, middle, last)

let first, middle, last
first = nums[0]
middle = nums[(nums.length - 1)/2]
last = nums[(nums.length-1)]
log(first, middle, last)


//     Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [4, 'chair', true, 'draw', 2.718923, null, '*', '#', 7684682735439284]
log(mixedDataTypes.length)
//     Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//     Print the array using console.log()
//     Print the number of companies in the array
//     Print the first company, middle and last company
log(itCompanies[0], itCompanies[Math.round(itCompanies.length -1 )/2], itCompanies[itCompanies.length - 1])
//     Print out each company
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6])
//     Change each company name to uppercase one by one and print them out
for(let i = 0; i < itCompanies.length; i++){
log(itCompanies[i].toUpperCase())
}
//     Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
log(itCompanies[0] +','+ itCompanies[1] +', '+ itCompanies[2] +', '+ itCompanies[3] +', '+ itCompanies[4] +', '+ itCompanies[5] + ' and ' + itCompanies[6] + 'are big IT companies')

//     Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies.includes('Amazon')){
    log('Exists: true')
}else{
     log('Exists: false')
}
// //     Filter out companies which have more than one 'o' without the filter method
// const o = new RegExp ('o'[2])
// for(let p = 0; p < itCompanies.length; p++){
// if(itCompanies[p].includes(o)){

//     log(itCompanies(p))
// }

// }

//     Sort the array using sort() method
log(itCompanies.sort())
//     Reverse the array using reverse() method
log(itCompanies.reverse())
//     Slice out the first 3 companies from the array
log(itCompanies.splice(0, 3))
//     Slice out the last 3 companies from the array
log(itCompanies.splice(itCompanies.length-3, 3))
//     Slice out the middle IT company or companies from the array
log(itCompanies.splice(Math.round(itCompanies.length -1 )/2), 1)

//     Remove the first IT company from the array
log(itCompanies.shift())

//     Remove the middle IT company or companies from the array
log(itCompanies.shift(Math.round(itCompanies.length -1 )/2), 1)

//     Remove the last IT company from the array
log(itCompanies.pop())

//     Remove all IT companies
for(let t = 0; t < itCompanies.length; t++){
    itCompanies.pop
}
log(itCompanies)


//TODO Uhm, make this shii work
//! Youre fired
//? What is this
//* What a God tier plugin

// where is my mind?
//! This formatting sucks!
