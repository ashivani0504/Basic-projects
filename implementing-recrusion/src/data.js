export const familyTree = {
  name: "john",
  age: 90,
  children: [
    { name: "mary", age: 60 },
    {
      name: "jay",
      age: 60,
      children: [
        {
          name: "mitchell",
          age: 35,
          children: [{ name: "lily", age: 12 }],
        },
        {
          name: "clair",
          age: 37,
          children: [
            { name: "hailey", age: 24 },
            { name: "alex", age: 20 },
            { name: "luke", age: 17 },
          ],
        },
      ],
    },
  ],
};
