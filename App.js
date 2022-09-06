import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { Fragment } from "react"

import MainScreen from "./src/screens/MainScreen"

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <MainScreen />
    </Fragment>
  )
}
