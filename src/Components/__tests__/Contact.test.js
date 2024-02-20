import { render, screen } from "@testing-library/react";
import { Contact } from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", ()=>{
  it("Should load Contact Us component", () => {
    render(<Contact/>)  //This will be rendered to the JSDOM
  
    const heading = screen.getByRole("heading");
  
  
    expect(heading).toBeInTheDocument();
  });
  
  
  it("Should load Contact Us Component", ()=>{
    render(<Contact/>)
  
    const button = screen.getByText("Submit"); 
  
    expect(button).toBeInTheDocument();
  })
})

