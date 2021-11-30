const people = ["Egor","Anna","Gleb"]
const guys = ["1","2","3"]

const people1 = people.slice()

const people3 = [...people,...guys]

const people4 = Array.from(people)

console.log(people3)
