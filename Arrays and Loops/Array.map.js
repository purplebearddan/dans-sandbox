// MAP RETURNS AN ARRAY

const colors = [
  "red", // 0
  "green", // 1
  "blue", // 2
  "yellow", // 3
];

const convertToUpperCase = (itemFromTheArray) => {
  return itemFromTheArray.toUpperCase();
};

const upperCaseColors = colors.map(convertToUpperCase);

console.log(colors);
console.log(upperCaseColors);
console.log(colors);
