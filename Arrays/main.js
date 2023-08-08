type=module
//! Exercise: Level 2

//TODO     Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
let log = console.log;
const country = require('./countries');
const webStack = require('./web_techs');
log(country.countriesArr)
//     First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text.replace(".", "");
let noPunct = text.split(" ");
console.log(noPunct);
console.log(noPunct.length);

//*     In the following shopping cart add, remove, edit items
//         add 'Meat' in the beginning of your shopping cart if it has not been already added
//         add Sugar at the end of you shopping cart if it has not been already added
//         remove 'Honey' if you are allergic to honey
//         modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift('Meat')
}

log(shoppingCart)

if(!shoppingCart.includes('Sugar')){
    shoppingCart.unshift('Sugar')
}
log(shoppingCart)

let allergicHoney = true;
if(allergicHoney){
    shoppingCart.shift('Honey')
}

log(shoppingCart)

//shoppingCart.replace('Tea', 'Green Tea')

//?my name is Bobby this is nightmare of a doc


//     In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(country.countriesArr.includes('Ethiopia')){
    log('ETHIOPIA')
}else{
    country.countriesArr.push('Ethiopia')
}
//     In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webStack.webTechs.includes('Sass')){
log("Sass is a CSS preprocess")
}else{
webStack.webTechs.push('Sass')
log(webStack.webTechs);
}
//     Concatenate the following two variables and store it in a fullStack variable.

    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']
    const fullStack = frontEnd.concat(backEnd)
    console.log(fullStack)

//     ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
