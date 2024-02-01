import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("Should load the contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load the button inside the contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Should load the inputbox inside the contact us component", () => {
    render(<Contact />);

    const inputBox = screen.getByPlaceholderText("name");

    expect(inputBox).toBeInTheDocument();
  });

  it("Should load the two inputbox inside the contact us component", () => {
    render(<Contact />);

    const inputBoxs = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxs.length).toBe(2);
  });
});
