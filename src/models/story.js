const start = "start";
const end = "end";
const title = "title";
const description = "description";
const coordinates = "coordinates";

const Story = {
  events: [
    {
      [title]: "The year I was born!",
      [description]: "Birthday",
      [start]: new Date(1996, 6, 29),
      [coordinates]: [103.817552, 1.354526],
    },
    {
      [title]: "Grew up in Brussels, Belgium",
      [description]: "",
      [start]: new Date(1996),
      [end]: new Date(2014),
      [coordinates]: [4.34878, 50.8504],
    },
    {
      [title]: "Moved to Singapore",
      [description]: "",
      [start]: new Date(1996),
      [end]: new Date(2014),
      [coordinates]: [4.34878, 50.8504],
    },
  ],
};

export default Story;
