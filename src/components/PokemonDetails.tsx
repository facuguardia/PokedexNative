import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';

import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{...StyleSheet.absoluteFillObject}}>
      {/* Types */}
      <View style={{...styles.container, marginTop: 370}}>
        <Text style={styles.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types &&
            pokemon.types.map(({type}) => (
              <Text
                key={type.name}
                style={{...styles.regularText, marginRight: 10}}>
                {type.name}
              </Text>
            ))}
        </View>

        {/* Weight */}
        <Text style={styles.title}>Weight</Text>
        <View>
          <Text style={styles.regularText}>{pokemon.weight}kg</Text>
        </View>
      </View>

      {/* Sprites */}
      <View style={styles.container}>
        <Text style={styles.title}>Sprites</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {pokemon.sprites?.front_default && (
            <FadeInImage
              uri={pokemon.sprites.front_default}
              style={styles.basicSprite}
            />
          )}
          {pokemon.sprites?.back_default && (
            <FadeInImage
              uri={pokemon.sprites.back_default}
              style={styles.basicSprite}
            />
          )}
          {pokemon.sprites?.front_shiny && (
            <FadeInImage
              uri={pokemon.sprites.front_shiny}
              style={styles.basicSprite}
            />
          )}
          {pokemon.sprites?.back_shiny && (
            <FadeInImage
              uri={pokemon.sprites.back_shiny}
              style={styles.basicSprite}
            />
          )}
        </ScrollView>
      </View>

      {/* Abilities */}
      <View style={styles.container}>
        <Text style={styles.title}>Abilities</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities &&
            pokemon.abilities.map(({ability}) => (
              <Text key={ability.name} style={styles.regularText}>
                {ability.name}
              </Text>
            ))}
        </View>
      </View>

      {/* Moves */}
      <View style={styles.container}>
        <Text style={styles.title}>Moves</Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {pokemon.moves &&
            pokemon.moves.map(({move}) => (
              <Text key={move.name} style={styles.regularText}>
                {move.name}
              </Text>
            ))}
        </View>
      </View>


      {/* Stats */}
      <View style={styles.container}>
        <Text style={styles.title}>Stats</Text>
        <View>
          {pokemon.stats && pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={{flexDirection: 'row'}}>
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10,
                  width: 150,
                }}
                key={stat.stat.name}>
                {stat.stat.name}
              </Text>

              <Text
                style={{
                  ...styles.regularText,
                  fontWeight: 'bold',
                }}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>

        {/* Sprite final */}
        <View
          style={{
            marginBottom: 20,
            alignItems: 'center',
          }}>
          {pokemon.sprites?.front_default && (
            <FadeInImage
              uri={pokemon.sprites.front_default}
              style={styles.basicSprite}
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});
