import { render } from "@testing-library/react"
import PageContainer from ".";

describe('PageContainer component', () => {
  it('render PageContainer component', () => {
    // ARRANGE
    const { container } = render(<PageContainer title="">test</PageContainer>);

    // ACT
    const pageContainerNode = container.getElementsByClassName('content');

    // ASSERT
    expect(pageContainerNode.length).toBe(1);
  });

  it('check render PageContainer children', () => {
    // ARRANGE
    const { container } = render(<PageContainer title=""><div className="test"></div></PageContainer>);

    // ACT
    const pageContainerNode = container.getElementsByClassName('test');
    const loaderNode = container.getElementsByClassName('loader');

    // ASSERT
    expect(pageContainerNode.length).toBe(1);
    expect(loaderNode.length).toBe(0);
  });

  it('check dont render PageContainer children', () => {
    // ARRANGE
    const { container } = render(<PageContainer loader title=""><div className="test"></div></PageContainer>);

    // ACT
    const pageContainerNode = container.getElementsByClassName('test');
    const loaderNode = container.getElementsByClassName('loader');

    // ASSERT
    expect(pageContainerNode.length).toBe(0);
    expect(loaderNode.length).toBe(1);
  });
});
