
import { timeInClassCalculator } from "./courseTimeCalculator.js";

const form = document.querySelector('#calculatorForm')

const formHandler =

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let { daysCompleted, weeksCompleted } = e.target.elements
        const [days, weeks] = [daysCompleted, weeksCompleted].map(unit => parseInt(unit.value))
        const sessions = (weeks * 2) + days
        console.log(days, weeks)

        document.querySelector('#result').textContent = `${timeInClassCalculator(sessions)}`
    })