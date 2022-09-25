import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import { ContactUsForm } from "./ContactUsForm";

describe("ContactUsForm", () => {
  it("will display an error if all fields except the email are submitted", () => {
    render(<ContactUsForm />);

    const inputSelect = screen.getByTestId("department-select");
    fireEvent.change(inputSelect, { target: { value: "it" } });

    const texArea = screen.getByTestId("question-textarea");
    fireEvent.change(texArea, { target: { value: "Some question..." } });

    const submit = screen.getByTestId("submit-button");
    fireEvent.click(submit);
    expect(screen.getByTestId("error-header")).toBeInTheDocument();
    expect(screen.queryByTestId("success-header")).not.toBeInTheDocument();
  });

  it("will display an error if all fields except the department are submitted", () => {
    render(<ContactUsForm />);

    const email = screen.getByTestId("email-input");
    fireEvent.change(email, { target: { value: "rade@gmail.com" } });

    const texArea = screen.getByTestId("question-textarea");
    fireEvent.change(texArea, { target: { value: "Some question..." } });

    const submit = screen.getByTestId("submit-button");
    fireEvent.click(submit);
    expect(screen.getByTestId("error-header")).toBeInTheDocument();
    expect(screen.queryByTestId("success-header")).not.toBeInTheDocument();
  });

  it("will display an error if all fields except the question are submitted", () => {
    render(<ContactUsForm />);

    const email = screen.getByTestId("email-input");
    fireEvent.change(email, { target: { value: "aaa@a.com" } });

    const inputSelect = screen.getByTestId("department-select");
    fireEvent.change(inputSelect, { target: { value: "it" } });

    const submit = screen.getByTestId("submit-button");
    fireEvent.click(submit);
    expect(screen.getByTestId("error-header")).toBeInTheDocument();
    expect(screen.queryByTestId("success-header")).not.toBeInTheDocument();
  });

  it("will display a success message if all fields are submitted", () => {
    render(<ContactUsForm />);

    const email = screen.getByTestId("email-input");
    fireEvent.change(email, { target: { value: "rade@gmail.com" } });

    const inputSelect = screen.getByTestId("department-select");
    fireEvent.change(inputSelect, { target: { value: "it" } });

    const texArea = screen.getByTestId("question-textarea");
    fireEvent.change(texArea, { target: { value: "Some question..." } });

    const submit = screen.getByTestId("submit-button");
    fireEvent.click(submit);
    expect(screen.getByTestId("success-header")).toBeInTheDocument();
    expect(screen.queryByTestId("error-header")).not.toBeInTheDocument();
  });
});
