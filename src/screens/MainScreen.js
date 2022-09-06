import { View, Text, StyleSheet, Button } from "react-native"
import BackgroundScreen from "../components/BackgroundScreen"
import GreyButton from "../components/GreyButton"

const MainScreen = () => {
  return (
    <BackgroundScreen>
      <View style={styles.screen}>
        <Text style={styles.title}>The world's catbreeds</Text>
        <View style={styles.buttonContainer}>
          <GreyButton>Kategori 1</GreyButton>
          <GreyButton>Kategori 2</GreyButton>
        </View>
        <View style={styles.buttonContainer}>
          <GreyButton>Kategori 3</GreyButton>
          <GreyButton>Kategori 4</GreyButton>
        </View>
      </View>
    </BackgroundScreen>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
  },
})
