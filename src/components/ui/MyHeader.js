import { View, Text, StyleSheet } from "react-native"

const MyHeader = (item) => {
  const title = item.title

  return (
    <View style={styles.header}>
      <Text>MY header {title}</Text>
    </View>
  )
}

export default MyHeader

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF971B",
  },
})
