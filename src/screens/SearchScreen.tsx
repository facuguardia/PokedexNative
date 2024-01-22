import React from 'react';
import {StyleSheet, View} from 'react-native';

import { SearchInput } from '../components/SearchInput';


export const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
