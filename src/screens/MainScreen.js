import { View, Text, StyleSheet } from "react-native"
import GreyButton from "../components/ui/GreyButton"
import BackgroundScreen from "../components/BackgroundScreen"

const MainScreen = ({ navigation }) => {
  const onButtonPressed = (kategori) => {
    console.log("Du klickade på knappen för " + kategori)
    navigation.navigate(kategori)
  }

  return (
    <BackgroundScreen>
      <Text style={styles.title}>The world's catbreeds</Text>
      <View style={styles.buttonContainer}>
        <GreyButton onPressed={() => onButtonPressed("kat1")}>
          Kategori 1
        </GreyButton>
        <GreyButton onPressed={() => onButtonPressed("kat2")}>
          Kategori 2
        </GreyButton>
      </View>
      <View style={styles.buttonContainer}>
        <GreyButton onPressed={() => onButtonPressed("kat3")}>
          Kategori 3
        </GreyButton>
        <GreyButton onPressed={() => onButtonPressed("kat4")}>
          Kategori 4
        </GreyButton>
      </View>
    </BackgroundScreen>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
})
