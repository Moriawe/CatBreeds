import { Text, View, StyleSheet, TextInput, Button } from "react-native"
import { UserContext } from "../../data/UserContext"
import { useContext, useEffect, useState } from "react"
import GreyButton from "../components/ui/GreyButton"
import BackgroundScreen from "../components/BackgroundScreen"

const UserScreen = () => {
  const user = useContext(UserContext)
  //console.log(user)

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  function onLogin() {
    //console.log("You are logging in")
    if (userName.trim().length === 0 || password.trim().length === 0) {
      Alert.alert("Loggin Error", "Please fill in your username and password", [
        { text: "OK", style: "default", onPress: onReset },
      ])
      return
    }
    user.loggIn(userName)
  }

  function onReset() {
    setUserName("")
    setPassword("")
  }

  function onCreateAccount() {
    console.log("You are creating a new account")
  }

  useEffect(() => {
    console.log(user.userName)
  }, [])

  return (
    <BackgroundScreen>
      {user.isLoggedIn ? (
        <Text style={styles.loginText}>{"Välkommen " + user.user} </Text>
      ) : (
        <View style={styles.inputContainer}>
          <Text style={styles.loginText}>Please log in</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUserName}
            placeholder="Username"
            value={userName}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
          />
          <View style={styles.buttonContainer}>
            <GreyButton onPressed={onLogin}>Login</GreyButton>
            <GreyButton onPressed={onCreateAccount}>Create Account</GreyButton>
          </View>
        </View>
      )}
    </BackgroundScreen>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#000000",
    marginTop: 50,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 5,
  },
  loginText: {
    padding: 15,
    color: "white",
    textAlign: "center",
    fontSize: 30,
  },
  input: {
    backgroundColor: "white",
    padding: 5,
    borderColor: "black",
    borderWidth: 2,
    margin: 2,
  },
})
