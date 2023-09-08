const numbers = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9, // 3
];

// current value comes from the array,
// accumulator comes from reduce's second argument
const reducedNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 5);

console.log(reducedNumbers);
