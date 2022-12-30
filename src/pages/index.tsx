import { useEffect, useState } from 'react'
import PokemonList from 'src/components/ui/PokemonList';
import PageContainer from 'src/components/template/PageContainer'
import useFetch from 'src/hooks/useFetch'
import { TypePokemon } from 'src/types/pokemon';
import Header from 'src/components/core/Header';

export default function Home() {
  const { data, loading, error } = useFetch<{pokemon: TypePokemon[]}>('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
  const [pokemons, setPokemons] = useState<TypePokemon[]>([]);

  useEffect(() => {
    if (data) {
      setPokemons(data.pokemon);
    }
  }, [data]);

  return (
    <PageContainer title="Pokedex" loader={loading}>
      <Header />
      <PokemonList pokemons={pokemons} />
    </PageContainer>
  )
}
