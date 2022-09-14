import { createContext, useState } from "react"

export const UserContext = createContext({
  isLoggedIn: false,
  user: "",
  changeUser: () => {},
  loggIn: () => {},
  loggOut: () => {},
})

const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")

  function changeUser(userName) {
    setUser = userName
  }

  function loggIn(user) {
    setLoggedIn(true)
    setUser(user)
  }

  function loggOut() {
    setLoggedIn(false)
    setUser("")
  }

  const config = {
    isLoggedIn: isLoggedIn,
    loggIn: loggIn,
    loggOut: loggOut,
    user: user,
    changeUser: changeUser,
  }

  return <UserContext.Provider value={config}>{children}</UserContext.Provider>
}

export default UserContextProvider
