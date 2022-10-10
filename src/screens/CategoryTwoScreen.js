import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native"
import { CATEGORY_TWO } from "../../data/CategoriesData"

const CategoryTwoScreen = ({ navigation }) => {
  const onChosenBreed = (breed) => {
    //console.log("Du klickade på knappen för " + breed)
    navigation.navigate("catbreedinfo", { breedName: breed })
  }

  return (
    <View style={styles.box}>
      <Text style={styles.title}>Kategori 2</Text>
      <FlatList
        data={CATEGORY_TWO}
        numColumns={1}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListFooterComponent={<View style={{ margin: 50 }} />}
        renderItem={(itemData) => {
          //console.log(itemData.item.image)
          return (
            <Pressable onPress={() => onChosenBreed(itemData.item.breed)}>
              <View style={styles.box}>
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

export default CategoryTwoScreen

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
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
