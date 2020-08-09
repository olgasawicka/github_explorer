import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Search from "../Search";

afterEach(cleanup);

const setup = () => {
  const component = render(<Search />);
  const input = component.getByLabelText("username");
  const button = component.getByText("search");
  return {
    input,
    button,
    ...component,
  };
};

test("It should render properly", () => {
  const { input, button } = setup();
  expect(input.value).toBe("");
  expect(button.disabled).toBeTruthy();
  expect(button.textContent).toBe("search");
});

test("It should displays the correct value on input change", () => {
  const { input, button } = setup();
  expect(input.value).toBe("");
  fireEvent.change(input, { target: { value: "someuser" } });
  expect(input.value).toBe("someuser");
  expect(button.disabled).toBeFalsy();
});
