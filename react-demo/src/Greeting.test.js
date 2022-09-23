import { render } from "@testing-library/react";
import * as React from "react";
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("will match snapshot", () => {
    const component = render(<Greeting />);
    expect(component).toMatchSnapshot();
  });
});
