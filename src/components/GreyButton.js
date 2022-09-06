import { View, Text, Pressable, StyleSheet } from "react-native"

const GreyButton = ({ children }) => {
  return (
    <View style={styles.button}>
      <Pressable>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default GreyButton

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#333333",
    marginHorizontal: 3,
    marginVertical: 3,
  },
  buttonText: {
    color: "#ffffff",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
})
