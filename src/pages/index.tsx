import { useEffect, useState } from 'react'
import PokemonList from 'src/components/ui/PokemonList';
import PageContainer from 'src/components/template/PageContainer'
import useFetch from 'src/hooks/useFetch'
import { TypePokemon } from 'src/types/pokemon';
import Header from 'src/components/core/Header';
import Input from 'src/components/core/Input';
import getFilteredArray from 'src/components/functions/filter';
import { pokemonAPILink } from '../contants/links';
import ToggleTheme from 'src/components/core/ToggleTheme';
import ThemeProvider from 'src/context/theme';

export default function Home() {
  const { data, loading, error } = useFetch<{pokemon: TypePokemon[]}>(pokemonAPILink);

  const [pokemons, setPokemons] = useState<TypePokemon[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    if (data) {
      setPokemons(data.pokemon);
    }
  }, [data]);

  return (
    <ThemeProvider>
      <PageContainer title="Pokedex" loader={loading}>
        {!error && (
          <>
            <Header>
              <>
              <Input placeholder='Search pokemon name' state={filter} setState={setFilter} />
              <ToggleTheme />
              </>
            </Header>
            <PokemonList pokemons={getFilteredArray(pokemons, filter)} />
          </>
        )}
        {error && <h1>{error}</h1>}
      </PageContainer>
    </ThemeProvider>
  );
};
