import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("should take a snapshot", () => {
  const AppComponent = render(<App />);
  expect(AppComponent).toMatchSnapshot();
});
