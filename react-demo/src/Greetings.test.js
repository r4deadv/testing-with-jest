import { render } from "@testing-library/react";
import * as React from "react";
import Greetings from "./Greetings";

describe("Greetings", () => {
  it("will match snapshot when no name is passed", () => {
    const component = render(<Greetings />);
    expect(component).toMatchSnapshot();
  });
  it("will match snapshot with name prop is passed", () => {
    const component = render(<Greetings name={"Rade"} />);
    expect(component).toMatchSnapshot();
  });
});
