// JS Lesson 3
// Daniel Monaghan 🚀 

// generate 5 random numbers
let numbers = [
    Math.round(Math.random() * 19) + 1,
    Math.round(Math.random() * 19) + 1,
    Math.round(Math.random() * 19) + 1,
    Math.round(Math.random() * 19) + 1,
    Math.round(Math.random() * 19) + 1,
]

// for each number
// - ask the user whether they think the 
// next number is lower or higher than the current number

const askUser = (currentNumber) => {
    let answer = '';

    // trap the user until they give the right answer
    while (
        answer.toLowerCase() != 'higher' &&
        answer.toLowerCase() != 'lower'
    ) {
        answer = prompt(`Is the number 'higher' or 'lower' than ${currentNumber}?`)
    }
    return answer

}


const answer = askUser(1)
console.log(answer)