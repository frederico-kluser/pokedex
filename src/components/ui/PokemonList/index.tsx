import React, { useEffect, useState } from 'react';
import PokemonCard from '../PokemonCard';
import { TypePokemon } from '../../../types/pokemon';

import styles from './style.module.css';
import InfinityScroll from '../../core/InfinityScroll';

interface InterfacePokemonList {
	readonly pokemons: TypePokemon[];
}

const PokemonList = ({ pokemons = [] }: InterfacePokemonList) => {
  const [renderAmount, setRenderAmount] = useState(12);

	return (
		<InfinityScroll
			endOfListCallback={() => {
				setRenderAmount((prevValue) => prevValue + 12);
			}}
      hasMoreData={pokemons.length > renderAmount}
		>
			<div className={styles.container}>
				{pokemons.map(({ img, name, num, type }, index) => index <= renderAmount && (
					<PokemonCard key={num} img={img} name={name} num={num} type={type} />
				))}
			</div>
		</InfinityScroll>
	);
};

export default PokemonList;
