import { View, StyleSheet } from "react-native";
import ProductBlock from "./ProductBlock";
import data from "../data/mock";

const SearchResult = ({ query }) => {
  const filteredData = data.filter((item) =>
    item.products.some((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
  );

  console.log(query);
  console.log(filteredData);

  return (
    <View>
      {filteredData.map((item) => (
        <ProductBlock key={item.id} data={item} />
      ))}
    </View>
  );
};

export default SearchResult;
