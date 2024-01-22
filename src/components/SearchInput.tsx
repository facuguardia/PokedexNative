import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
  onDebounce: (value: string) => void;
}

export const SearchInput = ({ onDebounce }: Props) => {
  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebouncedValue(textValue);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  const handleScroll = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.inputContainer}>
      {/* Search */}
      <TextInput
        style={styles.input}
        placeholder="Search Pokemon"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
        value={textValue}
        onChangeText={setTextValue}
        onScroll={handleScroll}
      />
      <Icon name="search-outline" size={30} color="grey" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
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
