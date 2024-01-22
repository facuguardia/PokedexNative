import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}


export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="ir al detalle"
        onPress={() => navigation.navigate('PokemonScreen')}
      />
    </View>
  );
};
