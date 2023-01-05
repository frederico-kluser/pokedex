import { screen, render } from "@testing-library/react";
import InfinityScroll from '.';

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('InfinityScroll component', () => {
  it('render InfinityScroll component', () => {
    // ARRANGE
    render((
      <InfinityScroll endOfListCallback={() => {}}>
      </InfinityScroll>
    ));

    // ACT
    const InfinityScrollElement = screen.getByText('Loading...');

    // ASSERT
    expect(InfinityScrollElement).toBeInTheDocument();
  });
});