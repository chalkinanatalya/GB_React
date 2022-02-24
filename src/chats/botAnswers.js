import { nanoid } from "nanoid";

export const botAnswers = [
  {
    question: "1",
    text: "It is certain",
  },
  {
    question: "2",
    text: "No chanses",
  },

  {
    question: "3",
    text: "It is decidedly so",
  },

  {
    question: "4",
    text: "I don't know the answer, try another number",
  },

  {
    question: "5",
    text: "Do not count on it",
  },

  {
    question: "6",
    text: "My sources say no",
  },

  {
    question: "7",
    text: "Outlook not so good",
  },

  {
    question: "8",
    text: "Signs point to yes",
  },

  {
    question: "9",
    text: "You'll get it",
  },
];

for (let i = 0; i < botAnswers.length; i++) {
  botAnswers[i].id = nanoid();
  botAnswers[i].author = "bot";
}
