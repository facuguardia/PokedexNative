import React, {useEffect, useRef, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getColors} from 'react-native-image-colors';

import {SimplePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  const navigation = useNavigation();

  useEffect(() => {
    getColors(pokemon.picture).then(colors => {
      if (!isMounted.current) return;

      colors.platform === 'android'
        ? setBgColor(colors.dominant || 'grey')
        : setBgColor(colors.background || 'grey');
    });
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('PokemonScreen', {
          simplePokemon: pokemon,
          color: bgColor,
        })
      }>
      <View style={{...styles.container, backgroundColor: bgColor}}>
        <Text style={styles.name}>
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} {'\n#' + pokemon.id}
        </Text>
      </View>

      <View style={styles.pokebolaContainer}>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokebola}
        />
      </View>
      <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 160,
    marginHorizontal: 10,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    overflow: 'hidden',
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -15,
    bottom: -15,
    opacity: 0.5,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
});
