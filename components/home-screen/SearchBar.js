import { React, useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from '../styles/SearchBar'; // Corrected import path

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleTermChange = (text) => {
    setQuery(text);
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={query} onChangeText={handleTermChange} placeholder="hello" />
    </View>
  );
};

export default SearchBar;
