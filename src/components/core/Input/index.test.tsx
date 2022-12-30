import { render, screen } from "@testing-library/react"
import Input from "."

describe('Input component', () => {
  const placeholder = 'test placeholder';
  const value = "test";

  beforeEach(() => {
    render(<Input placeholder={placeholder} state={value} setState={() => {}}  />);
  });

  it('render input component', () => {
    // ACT
    const inputNode = screen.getByPlaceholderText(placeholder);
  
    // ASSERT
    expect(inputNode).toBeInTheDocument();
  });

  it('check input value', () => {
    // ACT
    const inputNode: HTMLInputElement = screen.getByPlaceholderText(placeholder);
    
    // ASSERT
    expect(inputNode.value).toBe(value);
  });
});
