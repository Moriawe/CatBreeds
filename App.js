import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import BackgroundScreen from "./src/components/BackgroundScreen"
import MainScreen from "./src/screens/MainScreen"

export default function App() {
  const screen = <MainScreen />

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <BackgroundScreen>
        <SafeAreaView>
          <MainScreen />
        </SafeAreaView>
      </BackgroundScreen>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000",
  },
})
