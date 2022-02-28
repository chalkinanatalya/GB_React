import { nanoid } from "nanoid";

export const chatOne = [
  {
    question: "1",
    text: "Answer 1",
  },
  {
    question: "2",
    text: "Answer 2",
  },

  {
    question: "3",
    text: "Answer 3",
  },

  {
    question: "4",
    text: "Answer 4",
  },

  {
    question: "5",
    text: "Answer 5",
  },

  {
    question: "6",
    text: "Answer 6",
  },

  {
    question: "7",
    text: "Answer 7",
  },

  {
    question: "8",
    text: "Answer 8",
  },

  {
    question: "9",
    text: "Answer 9",
  },
];

for (let i = 0; i < chatOne.length; i++) {
  chatOne[i].id = nanoid();
  chatOne[i].author = "Bot #1";
}
