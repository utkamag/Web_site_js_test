function createAdress(type) {
    const adress = type.toUpperCase()
    return function (name) {
        return `${adress} ${name}`
    }
}

const man = createAdress("man")
const women = createAdress("women")

console.log(man("123"))
console.log(women("321"))
