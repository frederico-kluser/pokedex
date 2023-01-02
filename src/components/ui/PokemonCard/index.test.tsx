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
    const cardNode = container.getElementsByClassName('card');

    // ASSERT
    expect(cardNode.length).toBe(1);
  });

  it('check render multiple types', () => {
    // ARRANGE 
    const { container } = render(<PokemonCard {...defaultProps} type={['fire', 'thunder', 'water']} />);

    // ACT
    const typesNodes = container.getElementsByClassName('type');
    const fireTypeNode = screen.getByText('fire');
    const thunderTypeNode = screen.getByText('thunder');
    const waterTypeNode = screen.getByText('water');

    // ASSERT
    expect(typesNodes.length).toBe(3);
    expect(fireTypeNode).toBeInTheDocument();
    expect(thunderTypeNode).toBeInTheDocument();
    expect(waterTypeNode).toBeInTheDocument();
  });

  it('check render id', () => {
    // ARRANGE 
    const { container } = render(<PokemonCard {...defaultProps} num="001" />);

    // ACT
    const numIdNode = screen.getByText('#001');

    // ASSERT
    expect(numIdNode).toBeInTheDocument();
  });

  it('check render name', () => {
    // ARRANGE 
    const { container } = render(<PokemonCard {...defaultProps} name="pikachu" />);

    // ACT
    const nameNode = screen.getByText('pikachu');

    // ASSERT
    expect(nameNode).toBeInTheDocument();
  });

  it('check render image', () => {
    // ARRANGE
    const { container } = render(<PokemonCard {...defaultProps} img="http://www.serebii.net/pokemongo/pokemon/001.png" />);

    // ACT
    const imageNode = container.getElementsByClassName('image');Node

    // ASSERT
    expect(imageNode[0].getAttribute('src')).toBe('http://www.serebii.net/pokemongo/pokemon/001.png');
  });
});