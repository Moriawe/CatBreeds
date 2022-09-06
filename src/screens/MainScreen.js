import { View, Text, StyleSheet } from "react-native"
import GreyButton from "../components/GreyButton"

const MainScreen = () => {
  return (
    <View>
      <Text style={styles.text}>The world's catbreeds</Text>
      <View style={styles.buttonContainer}>
        <GreyButton>Kategori 1</GreyButton>
        <GreyButton>Kategori 2</GreyButton>
      </View>
      <View style={styles.buttonContainer}>
        <GreyButton>Kategori 3</GreyButton>
        <GreyButton>Kategori 4</GreyButton>
      </View>
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
})
