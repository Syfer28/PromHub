import { useState } from 'react';
import { StyleSheet, SafeAreaView } from "react-native";
// import { useFonts, Kanit_600SemiBold } from "@expo-google-fonts/kanit";
// import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import SearchBar from "../home-screen/SearchBar";
import SearchResult from '../home-screen/SearchResult';

const HomeScreen = () => {
  const [query, setQuery] = useState('') 

  const onSearch = (term) => {
    setQuery(term)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={onSearch}/>
      <SearchResult />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  }
});

export default HomeScreen;
