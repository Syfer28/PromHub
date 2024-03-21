import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Product = ({ product }) => {
  const screenWidth = Dimensions.get('window').width;
  const productWidth = (screenWidth - 20 - 20) / 2;
  return (
    <View key={product.id}  style={[
        styles.container, 
        product.id % 2 === 0 ? { marginRight: 0 } : { marginRight: 20 },
        {width: productWidth},
      ]}>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BDC3C7',
    marginRight: 20,
    height: 50,
  }
})

export default Product;