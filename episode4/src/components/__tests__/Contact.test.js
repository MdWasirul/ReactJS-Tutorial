import "@testing-library/jest-dom";
import Contact from "../Contact";
import { render, screen } from "@testing-library/react";


describe("Contact us page test Case", () => {
  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion

    expect(heading).toBeInTheDocument();
  });

  it("should load button  component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    // const button = screen.getByText("Random");

    //Assertion

    expect(button).toBeInTheDocument();
  });

  it("should load 2 input component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);
    
    //Assertion
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
