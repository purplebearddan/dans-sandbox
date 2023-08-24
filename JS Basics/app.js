
// declaring a variable that can change
// declaring a variable that we can "let" change
let x = 5

// using the variable 'x' to assign a value to 'x'
x = x + 5

// using the log method on the console object
console.log(x, 5, "Dan")

// declare a variable that we cannot change*
const PI = 3.142

// data types 

const myString = `Hello World` // words, names, emails, model numbers, serial numbers, Phone Numbers, PIN Numbers....
const myIntegerNumber = 33 // whole numbers
const myFloatingPointNumber = 3.142 // number with decimals
const myBoolean = true // or false
const myNull = null // literally nothing

const modelNumber = 'MLN-762394872639400000'
const serialNumber = '000000000000234234234023423'
const phoneNumber = '07123456789'
const PINNumber = '0000'

// array
const shoppingList = [
    "milk",  // 0
    'eggs',  // 1
    `Ham`,  // 2
    `cheese`, // 3
    'bread',  // 4
    true,  // 5
    55, // 6
    modelNumber, // 7
    null // 8
]
console.log(shoppingList[0])

// JS Object
const mario = {
    name: 'Mario',
    occupation: 'Plumber / Hero',
    inventory: [
        {
            itemName: 'Flower',
            power: 2.5
        }
    ],
    health: 100,
    isAlive: true
}

console.log(mario['name'])











// functions
const ES6circleAreaCalc = (radius, unitOfMeasurement = 'cm') => {
    const answer = PI * radius ** 2
    return `${answer} ${unitOfMeasurement}`
};

// The 'this' keyword only works in the function below, not above
function circleAreaCalc(radius, unitOfMeasurement = 'cm') {
    const answer = PI * radius ** 2
    return `${answer} ${unitOfMeasurement}`
}; 