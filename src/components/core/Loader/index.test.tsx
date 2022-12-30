import { render, screen } from "@testing-library/react"
import Loader from "."

describe('Loader component', () => {
  const defaultProps = {
    color: "#000000",
    size: 150,
    transparentColor: "#FFFFFF"
  }

  it('render Loader component', () => {
    // ARRANGE
    const { container } = render(<Loader {...defaultProps} />);

    // ACT
    const loader = container.getElementsByClassName('loader');

    // ASSERT
    expect(loader.length).toBe(1);
  });

  it('check running', () => {
    // ARRANGE
    const { container } = render(<Loader {...defaultProps} loading={true} />);

    // ACT
    const loader = container.getElementsByClassName('animation');

    // ASSERT
    expect(loader.length).toBe(1);
  });

  it('check stopped', () => {
    // ARRANGE
    const { container } = render(<Loader {...defaultProps} loading={false} />);

    // ACT
    const loader = container.getElementsByClassName('animation');

    // ASSERT
    expect(loader.length).toBe(0);
  });

  it('check property color', () => {
    // ARRANGE
    const color = 'rgb(15, 15, 15)';
    const { container } = render(<Loader {...defaultProps} color={color} />);

    // ACT
    const loader = container.getElementsByClassName('loader')[0];
    const centerBall = container.getElementsByClassName('centerBall')[0]

    // ASSERT
    expect(loader.getAttribute('style')?.indexOf(`background-color: ${color};`)).not.toBe(-1);
    expect(centerBall.getAttribute('style')?.indexOf(`background-color: ${color};`)).not.toBe(-1);
  });

  it('check property transparentColor', () => {
    // ARRANGE
    const color = 'rgb(152, 152, 152)';
    const { container } = render(<Loader {...defaultProps} transparentColor={color} />);

    // ACT
    const horizontalDivisor = container.getElementsByClassName('horizontalDivisor')[0];
    const centerBall = container.getElementsByClassName('centerBall')[0]

    // ASSERT
    expect(horizontalDivisor.getAttribute('style')?.indexOf(`background-color: ${color};`)).not.toBe(-1);
    expect(centerBall.getAttribute('style')?.indexOf(`border-color: ${color};`)).not.toBe(-1);
  });

  it('check property size', () => {
    // ARRANGE
    const size = 150;
    const { container } = render(<Loader {...defaultProps} size={size} />);

    // ACT
    const loader = container.getElementsByClassName('loader')[0];
    const horizontalDivisor = container.getElementsByClassName('horizontalDivisor')[0];
    const centerBall = container.getElementsByClassName('centerBall')[0];

    // ASSERT
    expect(loader.getAttribute('style')?.indexOf(`height: ${size}px;`)).not.toBe(-1);
    expect(loader.getAttribute('style')?.indexOf(`width: ${size}px;`)).not.toBe(-1);
    expect(horizontalDivisor.getAttribute('style')?.indexOf(`height: ${size/10}px;`)).not.toBe(-1);
    expect(centerBall.getAttribute('style')?.indexOf(`border-width: ${size/10}px;`)).not.toBe(-1);
    expect(centerBall.getAttribute('style')?.indexOf(`height: ${size/2}px;`)).not.toBe(-1);
    expect(centerBall.getAttribute('style')?.indexOf(`width: ${size/2}px;`)).not.toBe(-1);
  });
});
