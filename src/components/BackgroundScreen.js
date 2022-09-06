import { StyleSheet, ImageBackground } from "react-native"

const BackgroundScreen = ({ children }) => {
  return (
    <ImageBackground
      styles={styles.screen}
      source={require("../../assets/images/cover-cat.jpg")}
      resizeMode="cover"
      imageStyle={styles.backgroundImage}
    >
      {children}
    </ImageBackground>
  )
}

export default BackgroundScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
})
