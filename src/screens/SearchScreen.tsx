import React, {useEffect, useState} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';

import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {SearchInput} from '../components/SearchInput';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';

export const SearchScreen = () => {
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFiltered([]);
    }

    if (Number(term)) {
      const pokemonById = simplePokemonList.find(poke => poke.id === term);
      return setPokemonFiltered(pokemonById ? [pokemonById] : []);
    }

    const pokemonFiltered = simplePokemonList.filter(poke =>
      poke.name.toLowerCase().includes(term.toLowerCase()),
    );
    setPokemonFiltered(pokemonFiltered);
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SearchInput onDebounce={value => setTerm(value)} />
      <View style={styles.cardContainer}>
        <FlatList
          data={pokemonFiltered}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={pokemon => pokemon.id}
          // Render Item
          renderItem={({item}) => <PokemonCard pokemon={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
  },
});
