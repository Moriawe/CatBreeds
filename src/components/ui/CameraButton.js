import { View, Text, Pressable, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"

const CameraButton = ({ onPressed, title, iconName }) => {
  return (
    <View style={styles.button}>
      <Pressable onPress={onPressed}>
        <View style={styles.buttonContainer}>
          <Ionicons name={iconName} size={32} color="white" />
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CameraButton

const styles = StyleSheet.create({
  button: {
    //flex: 1,
    width: 200,
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
})
