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

  it('check render header children', () => {
    // ARRANGE
    const { container } = render(<Header><div className="test"></div></Header>);

    // ACT
    const divNode = container.getElementsByClassName('test');
    const headerNode = container.getElementsByClassName('container');

    // ASSERT
    expect(divNode.length).toBe(1);
    expect(headerNode.length).toBe(1);
  });
});
