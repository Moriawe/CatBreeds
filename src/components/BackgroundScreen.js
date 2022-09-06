import { ImageBackground, StyleSheet, View } from "react-native"

const BackgroundScreen = ({ children }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../../assets/images/cover-cat.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      {children}
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    opacity: 0.4,
    justifyContent: "center",
  },
})

export default BackgroundScreen
