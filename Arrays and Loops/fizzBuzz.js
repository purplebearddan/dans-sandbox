/**
 FizzBuzz is a challenge that involves 
 writing code that labels numbers divisible 
 by three as “Fizz,” four as “Buzz” and 
 numbers divisible by both as “FizzBuzz.”
 
 */
const fizzBuzz = (num) => {
  if (!(num % 3) && !(num % 4)) {
    console.log("FizzBuzz");
  } else if (!(num % 3)) {
    console.log("Fizz");
  } else if (!(num % 4)) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
};

let f = 0;

while (f < 100) {
  fizzBuzz(f);
  f++;
}
