import { render, screen } from "@testing-library/react"
import Header from "."

describe('Header component', () => {
  it('render header component', () => {
    // ARRANGE
    render(
      <Header data-testid="custom-element">
        new header
      </Header>
    );

    // ACT
    const headerNode = screen.getByText('new header');
  
    // ASSERT
    expect(headerNode).toBeInTheDocument();
  });
});
