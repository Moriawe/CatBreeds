import { View, Text, Image, StyleSheet } from "react-native"

const CatDetails = ({ info, title }) => {
  return (
    <View>
      {info
        .filter((breed) => breed.name === title)
        .map((cat) => (
          <View key={cat.id} style={styles.container}>
            <Image style={styles.catPhoto} source={{ uri: cat.image.url }} />
            <Text style={styles.description}>{cat.description}</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.infoText}>Origin: {cat.origin}</Text>
              <Text style={styles.infoText}>
                Life expectancy: {cat.life_span} years
              </Text>
              <Text style={styles.infoText}>
                intelligence: {cat.intelligence}
              </Text>
              <Text style={styles.infoText}>Grooming: {cat.grooming}</Text>
            </View>
          </View>
        ))}
    </View>
  )
}

export default CatDetails

const styles = StyleSheet.create({
  catPhoto: {
    margin: 20,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  container: {
    alignItems: "center",
  },
  infoContainer: {
    marginTop: 20,
  },
  infoText: {
    lineHeight: 30,
  },
})
