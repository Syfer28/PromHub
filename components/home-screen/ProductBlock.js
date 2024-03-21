import { View, FlatList } from 'react-native';
import Distributor from './Distributor'
import data from '../data/mock'

const ProductBlock = ({ data }) => {
  return (
    <View>
      <Distributor company={data} products={data.products} />
    </View>
  );
};


export default ProductBlock;
