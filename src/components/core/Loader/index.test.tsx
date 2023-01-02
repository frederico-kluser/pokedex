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
    const loaderNode = container.getElementsByClassName('loader');

    // ASSERT
    expect(loaderNode.length).toBe(1);
  });

  it('check running', () => {
    // ARRANGE
    const { container } = render(<Loader {...defaultProps} loading={true} />);

    // ACT
    const loaderNode = container.getElementsByClassName('animation');

    // ASSERT
    expect(loaderNode.length).toBe(1);
  });

  it('check stopped', () => {
    // ARRANGE
    const { container } = render(<Loader {...defaultProps} loading={false} />);

    // ACT
    const loaderNode = container.getElementsByClassName('animation');

    // ASSERT
    expect(loaderNode.length).toBe(0);
  });

  it('check property color', () => {
    // ARRANGE
    const color = 'rgb(15, 15, 15)';
    const { container } = render(<Loader {...defaultProps} color={color} />);

    // ACT
    const loaderNode = container.getElementsByClassName('loader')[0];
    const centerBallNode = container.getElementsByClassName('centerBall')[0]

    // ASSERT
    expect(loaderNode.getAttribute('style')?.indexOf(`background-color: ${color};`)).not.toBe(-1);
    expect(centerBallNode.getAttribute('style')?.indexOf(`background-color: ${color};`)).not.toBe(-1);
  });

  it('check property transparentColor', () => {
    // ARRANGE
    const color = 'rgb(152, 152, 152)';
    const { container } = render(<Loader {...defaultProps} transparentColor={color} />);

    // ACT
    const horizontalDivisorNode = container.getElementsByClassName('horizontalDivisor')[0];
    const centerBallNode = container.getElementsByClassName('centerBall')[0]

    // ASSERT
    expect(horizontalDivisorNode.getAttribute('style')?.indexOf(`background-color: ${color};`)).not.toBe(-1);
    expect(centerBallNode.getAttribute('style')?.indexOf(`border-color: ${color};`)).not.toBe(-1);
  });

  it('check property size', () => {
    // ARRANGE
    const size = 150;
    const { container } = render(<Loader {...defaultProps} size={size} />);

    // ACT
    const loaderNode = container.getElementsByClassName('loader')[0];
    const horizontalDivisorNode = container.getElementsByClassName('horizontalDivisor')[0];
    const centerBallNode = container.getElementsByClassName('centerBall')[0];

    // ASSERT
    expect(loaderNode.getAttribute('style')?.indexOf(`height: ${size}px;`)).not.toBe(-1);
    expect(loaderNode.getAttribute('style')?.indexOf(`width: ${size}px;`)).not.toBe(-1);
    expect(horizontalDivisorNode.getAttribute('style')?.indexOf(`height: ${size/10}px;`)).not.toBe(-1);
    expect(centerBallNode.getAttribute('style')?.indexOf(`border-width: ${size/10}px;`)).not.toBe(-1);
    expect(centerBallNode.getAttribute('style')?.indexOf(`height: ${size/2}px;`)).not.toBe(-1);
    expect(centerBallNode.getAttribute('style')?.indexOf(`width: ${size/2}px;`)).not.toBe(-1);
  });
});
