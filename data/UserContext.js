import { createContext, useState } from "react"

export const UserContext = createContext({
  isLoggedIn: false,
  user: "",
  login: () => {},
  logout: () => {},
  userPhoto: "",
  changePhoto: () => {},
})

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")
  const [userPhoto, setUserPhoto] = useState("")

  function login(user) {
    setLoggedIn(true)
    setUser(user)
  }

  function logout() {
    setLoggedIn(false)
    setUser("")
  }

  function changePhoto(photo) {
    setUserPhoto(photo)
    console.log()
  }

  const config = {
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
    user: user,
    userPhoto: userPhoto,
    changePhoto: changePhoto,
  }

  return <UserContext.Provider value={config}>{children}</UserContext.Provider>
}

export default UserContextProvider
