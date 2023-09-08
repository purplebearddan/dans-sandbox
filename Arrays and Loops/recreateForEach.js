const l = console.log;

const dansForEach = (arr, cb) => {
  for (const item of arr) {
    cb(item);
  }
};

const colors = ["red", "green", "blue"];

dansForEach(colors, (color) => {
  return console.log(color);
});

l("renamed console.log");
