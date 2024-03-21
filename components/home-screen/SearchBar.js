import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styles from "../styles/SearchBar"; // Corrected import path

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container} onSubmit={handleSubmit}>
      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit}
        placeholder="hello"
      />
    </View>
  );
};

export default SearchBar;
