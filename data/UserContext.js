import { createContext, useState } from "react"

const UserContext = createContext({
  user: "Josh",
  isLoggedIn: false,
  cats: [],
  addCat: (name) => {},
  removeCat: (name) => {},
})

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("Josh")
  const [isLoggedIn, setLoggedIn] = useState("false")
  const [cats, setCats] = useState([])

  function addCat(name) {
    setCats((currentItems) => [...currentItems, name])
  }

  function removeCat(name) {
    setCats((currentItems) => currentItems.filter((item) => item !== name))
  }

  const config = {
    user: user,
    isLoggedIn: isLoggedIn,
    cats: cats,
    add: addCat,
    remove: removeCat,
  }

  return <UserContext.Provider value={config}>{children}</UserContext.Provider>
}

export default UserContextProvider
