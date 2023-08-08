//*helper methods
let log = console.log();
// syntax
class ClassName {
    //  code goes here
}
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person("Brandon", "Ramirez")
const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person)
console.log(person1)
console.log(person2)
console.log(person3)

class Urbanist {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person10 = new Urbanist('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person10)


