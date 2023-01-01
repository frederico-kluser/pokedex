import { render } from "@testing-library/react"
import PageContainer from ".";

describe('PageContainer component', () => {
  it('render PageContainer component', () => {
    // ARRANGE
    const { container } = render(<PageContainer title="">test</PageContainer>);

    // ACT
    const pageContainer = container.getElementsByClassName('content');

    // ASSERT
    expect(pageContainer.length).toBe(1);
  });

  it('check render PageContainer children', () => {
    // ARRANGE
    const { container } = render(<PageContainer title=""><div className="test"></div></PageContainer>);

    // ACT
    const pageContainer = container.getElementsByClassName('test');
    const loader = container.getElementsByClassName('loader');

    // ASSERT
    expect(pageContainer.length).toBe(1);
    expect(loader.length).toBe(0);
  });

  it('check dont render PageContainer children', () => {
    // ARRANGE
    const { container } = render(<PageContainer loader title=""><div className="test"></div></PageContainer>);

    // ACT
    const pageContainer = container.getElementsByClassName('test');
    const loader = container.getElementsByClassName('loader');

    // ASSERT
    expect(pageContainer.length).toBe(0);
    expect(loader.length).toBe(1);
  });
});
