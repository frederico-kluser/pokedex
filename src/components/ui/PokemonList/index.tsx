import React from 'react';
import PokemonCard from '../PokemonCard';
import { TypePokemon } from '../../../types/pokemon';

import styles from './style.module.css';

interface InterfacePokemonList {
  pokemons: TypePokemon[];
};

const PokemonList = ({ pokemons = [] }: InterfacePokemonList) => {
  console.log('renderizou pokemonList');
  return (
  <div className={styles.container}>
    {pokemons.map(({ img, name, num, type }) => <PokemonCard key={num} img={img} name={name} num={num} type={type} />)}
  </div>
)};

export default PokemonList;
