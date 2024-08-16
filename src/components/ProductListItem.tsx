import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { Product } from "../types";

const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/margarita.png";

type productListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: productListItemProps) => {
  console.log(product);
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product?.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
