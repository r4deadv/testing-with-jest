import { render, screen } from "@testing-library/react";
import * as React from "react";
import App from "./App";

test("will have all expected fields", () => {
  const component = render(<App />);

  const labels = component.getAllByText(/name/);
  expect(labels.length).toEqual(2);

  const firstNmaeInput = component.getByTestId("first-name-input");
  const lastNmaeInput = component.getByTestId("last-name-input");
  expect(firstNmaeInput).toBeInTheDocument();
  expect(lastNmaeInput).toBeInTheDocument();

  const submitButton = component.getByText("Submit");
  expect(submitButton).toBeInTheDocument();
});
