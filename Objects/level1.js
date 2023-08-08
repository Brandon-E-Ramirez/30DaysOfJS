// Exercises: Level 0
//* Helper function
let log = console.log
//     Create an empty object called dog
const dog = {
name: 'Princess Ramirez',
legs: 4,
color: 'White',
age: 5,

bark(){
    console.log('Bark Bark!')
},

properties : function() {
    return `${this.name}${this.legs}${this.color}${this.age}`
  },
}    
log(dog);
    // Print the the dog object on the console
    // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
    // Get name, legs, color, age and bark value from the dog object
    // Set new properties the dog object: breed, getDogInfo

const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
log(copyPerson.getPersonInfo)





