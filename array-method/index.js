// sort()
const fruit = ['apple', 'pineapple', 'banana', 'dragon', 'strawberry', 'mango', 'kenep']

// console.log('original array', fruit)
// console.log('sorted', fruit.sort())
// console.log('current array', fruit)
// changes/mutates the array

// filter()
const age = [13, 17, 55, 45, 31, 23, 21, 30]
const ageFilter = age.filter( function(age) {
  return age > 18
})
console.log('Age Filter', ageFilter)

// written in anonymous arrow function, don't need () or {} since it's only one line
const ageFilter2 = age.filter(age => age > 30)
console.log('Age > 30', ageFilter2)

// find
const ageFind = age.find( function(age) {
  return age > 18
})
console.log('Age Find', ageFind)
// finds the first one that meets the condition, only prints 55
//rewritten
const ageFind2 = age.find (age => age < 18)
console.log('Find age < 18', ageFind2)

// some() -> returns boolean
const ageSome = age.some( age => age < 18)
console.log('Age Some', ageSome)

// every() --> returns true/false depending if everything meets criteria or not
const ageEvery = age.every( age => age > 0)
console.log('Every Age', ageEvery)

const ageEvery2 = age.every ( (ages) => {
  return ages < 10
})
console.log(ageEvery2)
