import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

export const SearchInput = () => {
  return (
    <View style={styles.inputContainer}>
      {/* Seacrh */}
      <TextInput
        style={styles.input}
        placeholder="Search Pokemon"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Icon name="search-outline" size={30} color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 10,
    marginTop: 20,
    marginHorizontal: 20,
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: 'black',
  },
});
