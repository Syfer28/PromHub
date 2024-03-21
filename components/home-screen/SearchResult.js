import { View, StyleSheet } from 'react-native'
import ProductBlock from './ProductBlock';
import data from '../data/mock'

const SearchResult = () => {
  return (
    <View>
      {data.map((item) => (
        <ProductBlock key={item.id} data={item}/>
      ))}
    </View>
  );
};


export default SearchResult;
