import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Fragment } from "react"

import MainScreen from "./src/screens/MainScreen"

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <View style={styles.screen}>
        <MainScreen />
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
})
