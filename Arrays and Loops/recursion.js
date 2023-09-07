const structure = {
  name: "main",
  id: 0,
  children: [
    {
      name: "section",
      id: 1,
      children: [
        {
          name: "section",
          id: 5,
          children: [],
        },
        {
          name: "section",
          id: 6,
          children: [],
        },
      ],
    },
    {
      name: "section",
      id: 2,
      children: [],
    },
    {
      name: "section",
      id: 3,
      children: [
        {
          name: "section",
          id: 7,
          children: [],
        },
      ],
    },
    {
      name: "section",
      id: 4,
      children: [
        {
          name: "section",
          id: 8,
          children: [],
        },
      ],
    },
  ],
};

const recursiveDemo = (obj) => {
  return recursiveDemo(obj?.children);
};

const answer = [...recursiveDemo(structure)];

console.log(answer);
