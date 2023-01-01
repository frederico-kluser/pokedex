import { render, screen } from "@testing-library/react";
import PokemonCard from ".";

describe('PokemonCard component', () => {
  const defaultProps = {
    img: "",
    name: "",
    num: "",
    type: [],
  }

  it('render PokemonCard component', () => {
    // ARRANGE
    const { container } = render(<PokemonCard {...defaultProps} />);

    // ACT
    const component = container.getElementsByClassName('card');

    // ASSERT
    expect(component.length).toBe(1);
  });

  it('check render multiple types', () => {
    // ARRANGE 
    const { container } = render(<PokemonCard {...defaultProps} type={['fire', 'thunder', 'water']} />);

    // ACT
    const types = container.getElementsByClassName('type');
    const fireType = screen.getByText('fire');
    const thunderType = screen.getByText('thunder');
    const waterType = screen.getByText('water');

    // ASSERT
    expect(types.length).toBe(3);
    expect(fireType).toBeInTheDocument();
    expect(thunderType).toBeInTheDocument();
    expect(waterType).toBeInTheDocument();
  });

  it('check render id', () => {
    // ARRANGE 
    const { container } = render(<PokemonCard {...defaultProps} num="001" />);

    // ACT
    const numId = screen.getByText('#001');

    // ASSERT
    expect(numId).toBeInTheDocument();
  });

  it('check render name', () => {
    // ARRANGE 
    const { container } = render(<PokemonCard {...defaultProps} name="pikachu" />);

    // ACT
    const name = screen.getByText('pikachu');

    // ASSERT
    expect(name).toBeInTheDocument();
  });

  it('check render image', () => {
    // ARRANGE
    const { container } = render(<PokemonCard {...defaultProps} img="http://www.serebii.net/pokemongo/pokemon/001.png" />);

    // ACT
    const image = container.getElementsByClassName('image');

    // ASSERT
    expect(image[0].getAttribute('src')).toBe('http://www.serebii.net/pokemongo/pokemon/001.png');
  });
});