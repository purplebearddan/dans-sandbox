// arrays
// simple array example
const colors = [
  "red", // 0
  "green", // 1
  "blue", // 2
  "yellow", // 3
];

for (let i = 0; i <= 5; i++) {
  console.log(i);
}

for (
  let i = 0; // declaration
  i < colors.length; // condition
  i++ // action
) {
  console.log(colors[i]);
}

// Complex Example
const poshColors = [
  {
    name: "red",
    rgb: "rgb(255,0,0)",
    hex: 0xff0000,
  },
  {
    name: "green",
    rgb: "rgb(0,255,0)",
    hex: 0x00ff00,
  },
  {
    name: "blue",
    rgb: "rgb(0,0,255)",
    hex: 0x0000ff,
  },
  {
    name: "yellow",
    rgb: "rgb(255,255,0)",
    hex: 0xffff00,
  },
];

const processColor = (color) => {
  for (const key in color) {
    //   if conditions inside of a loop
    if (color.name !== "red") {
      console.log(color.name, color[key]);
    } else {
      console.log("IT'S RED");
    }
  }
};

// 1st loop selects the object from the array of objects
for (const colorObject of poshColors) {
  // 2nd loop gets the keys form the color object from the first loop
  processColor(colorObject);
}

let x = 0;

while (x < 100) {
  if (x % 2 === 0) {
    console.log(`${x} is even`);
  } else {
    console.log(`${x} is odd`);
  }
  x++;
}
