// MAP RETURNS AN ARRAY

const colors = [
  "red", // 0
  "green", // 1
  "blue", // 2
  "yellow", // 3
];

const checkFor = (letter, itemFromTheArray) => {
  return itemFromTheArray.includes(letter);
};

const eColors = colors.filter((item) => checkFor("e", item));

console.log(eColors);
