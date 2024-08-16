import { ScrollView, View } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from '../../components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      <ScrollView>
        <ProductListItem product={products[0]} />
        <ProductListItem product={products[5]} />
      </ScrollView>
    </View>
  );
};

