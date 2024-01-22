import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

import {RootStackParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonDetails} from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, name, picture} = simplePokemon;

  const {isLoading, pokemon} = usePokemon(id);

  return (
    <View style={{flex: 1}}>
      <View style={{...styles.headerContainer, backgroundColor: color}}>
        {/* Arrow */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.pop()}
          style={{position: 'absolute', top: 5, left: 5}}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>

        {/* Name */}
        <View style={styles.nameConatainer}>
          <Text style={styles.name}>
            {name.charAt(0).toUpperCase() + name.slice(1) + '\n'}#{id}
          </Text>
        </View>

        {/* White Pokebola */}
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokebola}
        />

        {/* Pokemon Image */}
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>

      {/* Loading */}

      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={color} size={50} />
        </View>
      )}

      {/* Details */}
      <PokemonDetails pokemon={pokemon} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
    alignItems: 'center',
  },
  nameConatainer: {
    position: 'absolute',
    top: 20,
    left: 30,
  },
  name: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    top: 20,
  },
  pokebola: {
    width: 250,
    height: 250,
    bottom: -100,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
