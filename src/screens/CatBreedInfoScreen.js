import { View, Text, StyleSheet } from "react-native"
import { useEffect, useState } from "react"
import useFetch from "../useFetch"
import CatDetails from "../components/CatDetails"

const CatBreedInfoScreen = ({ route }) => {
  const catBreed = route.params.breedName
  const { data, isPending, error } = useFetch("http://10.0.2.2:8000/catbreeds")

  useEffect(() => {
    console.log(route.params.breedName)
  }, [])

  return (
    <View>
      <Text style={styles.title}>{catBreed}</Text>
      {error && <Text>{error}</Text>}
      {isPending && <Text>Loading...</Text>}
      {data && (
        <CatDetails info={data} title={catBreed} />
        // <CatDetails catInfo={data.filter((breed) => breed.name === catBreed)} />
      )}
    </View>
  )
}

export default CatBreedInfoScreen

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000",
    marginBottom: 20,
  },
})
