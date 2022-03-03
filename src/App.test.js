import { render, screen } from "@testing-library/react";
import { App } from "./App";
import ReactDOM from "react-dom";
import React from "react";
import { botAnswers } from "./chats/botAnswers";
import { MessageList } from "./components/MessageList/MessageList";
import { Form } from "./components/Form/Form";

describe("App", () => {
  let div;
  beforeEach(() => {
    div = document.createElement("div");
  });

  it("Рендер без краша", () => {
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Отрисовка всех компонентов в App", () => {
    ReactDOM.render(<App />, div);
    expect(div.querySelector("ul")).toBeTruthy();
    expect(div.querySelector("form")).toBeTruthy();
    expect(div.querySelector(".MuiRating-root")).toBeTruthy();
    expect(div.querySelector("legend")).toBeTruthy();
  });

  // it("mocking user input", () => {
  //   for (let i = 0; i < botAnswers.length; i++) {}
  //   div.querySelector("input").value = "1";
  //   div.querySelector("form").submit();
  //   expect(div.querySelector(`.test:nth-child(2)`).innerHTML).toBe(
  //     botAnswers[0].text
  //   );
  // });

  it("Рендеринг всех сообщений", () => {
    const messages = [
      { author: "John", text: "Hello, John" },
      { author: "Jane", text: "Hi, Jane" },
    ];
    ReactDOM.render(<MessageList messages={messages} />, div);
    expect(div.querySelectorAll("li").length).toBe(messages.length);
  });

  it("Отправка формы", () => {
    const addMessages = jest.fn();
    ReactDOM.render(<Form addMessage={addMessages} />, div);
    div.querySelector("form").submit();
    expect(addMessages()).toHaveBeenCalled;
  });
});
