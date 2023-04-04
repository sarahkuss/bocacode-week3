
const superHeroes = ['Batman', 'Superman', 'Ironman', 'Wonder Woman', 'Black Widow', 'Cat Woman', 'R2D2', 'Thor']

superHeroes.forEach( whateverIcallIt => {
  console.log(whateverIcallIt)
})

console.log(superHeroes)

const names = ['adi', 'bryan', 'jose', 'megan', 'liz', 'sarah', 'aaron']

names.forEach((eachPerson) => {
let sentence = `${eachPerson} is a student at Boca Code`
console.log(sentence)
})

// does the same as this
for (i = 0; i <names.length; i++) {
  let name = names[i]
  let sentences = `${name} is a student at Boca Code`
  console.log(sentences)
}

const fridgeItem = ['eggs', 'milk', 'creamer', 'yogurt', 'juice', 'raspberries', 'spinach', 'lettuce']

fridgeItem.forEach( (item, index) => {
  console.log(`${index}: ${item}`)
})