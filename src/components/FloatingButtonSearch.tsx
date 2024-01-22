import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const FloatingButtonSearch = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchScreen')}
      activeOpacity={0.8}
      style={styles.containerButton}>
      <Icon name="search-outline" color="white" size={40} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    backgroundColor: 'gray',
    opacity: 0.7,
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
