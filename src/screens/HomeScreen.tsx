import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {FloatingButtonSearch} from '../components/FloatingButtonSearch';
import {PokemonCard} from '../components/PokemonCard';
import {styles} from '../theme/StyleGlobal';

export const HomeScreen = () => {
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <View style={{...styles.marginGlobal, alignItems: 'center'}}>
      {/* Background */}
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      {/* Cards */}
      <View>
        <FlatList
          data={simplePokemonList}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={pokemon => pokemon.id}
          // Render Item
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          // Infinite Scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          // Activiti Indicator
          ListFooterComponent={
            <ActivityIndicator size={20} color="grey" style={{height: 100}} />
          }
        />
      </View>

      {/* Button Search */}
      <View style={{width: '100%'}}>
        <FloatingButtonSearch />
      </View>
    </View>
  );
};
