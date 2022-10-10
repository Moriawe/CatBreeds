import { ImageBackground, StyleSheet, View } from "react-native"

const BackgroundScreen = ({ children }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../../assets/images/cover-cat.jpg")}
      resizeMode="cover"
      style={styles.screen}
      imageStyle={styles.image}
    >
      {children}
    </ImageBackground>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    opacity: 0.4,
  },
})

export default BackgroundScreen
