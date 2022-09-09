import { View, Text, Pressable, StyleSheet } from "react-native"

const GreyButton = ({ children, onPressed }) => {
  return (
    <View style={styles.button}>
      <Pressable onPress={onPressed}>
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
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
})
