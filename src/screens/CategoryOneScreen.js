import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native"
import { CATEGORY_ONE } from "../../data/CategoriesData"

const CategoryOneScreen = ({ navigation }) => {
  const onChosenBreed = (breed) => {
    console.log("Du klickade på knappen för " + breed)
    navigation.navigate("catbreedinfo", { breedName: breed })
  }

  return (
    <View>
      <Text style={styles.title}>Kategori 1</Text>
      <FlatList
        data={CATEGORY_ONE}
        numColumns={1}
        renderItem={(itemData) => {
          return (
            <Pressable onPress={() => onChosenBreed(itemData.item.breed)}>
              <View>
                <Image
                  style={styles.breedImage}
                  source={{ uri: itemData.item.image }}
                />
                <View style={styles.listItem}>
                  <Text style={styles.listText}>{itemData.item.breed}</Text>
                </View>
              </View>
            </Pressable>
          )
        }}
      />
    </View>
  )
}

export default CategoryOneScreen

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000",
    marginBottom: 20,
  },
  listItem: {
    margin: 10,
    backgroundColor: "#000000",
  },
  listText: {
    fontSize: 20,
    color: "#fff",
  },
  breedImage: {
    width: 100,
    height: 100,
  },
})
