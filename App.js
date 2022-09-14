import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Fragment, useContext } from "react"

import { Ionicons, AntDesign } from "@expo/vector-icons"

import MainScreen from "./src/screens/MainScreen"
import CategoryOneScreen from "./src/screens/CategoryOneScreen"
import CategoryTwoScreen from "./src/screens/CategoryTwoScreen"
import CategoryThreeScreen from "./src/screens/CategoryThreeScreen"
import CategoryFourScreen from "./src/screens/CategoryFourScreen"
import CatBreedInfoScreen from "./src/screens/CatBreedInfoScreen"
import UserScreen from "./src/screens/UserScreen"
import UserContextProvider, { UserContext } from "./data/UserContext"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Fragment>
      <UserContextProvider>
        <Tab.Navigator>
          <Tab.Screen
            name="home"
            component={MainScreen}
            options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="user-profile"
            component={UserScreen}
            options={{
              title: "User profile",
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </UserContextProvider>
    </Fragment>
  )
}

export default function App() {
  const user = useContext(UserContext)

  return (
    <Fragment>
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tab"
              component={TabNavigator}
              options={{ headerShown: false, title: "Start" }}
            />
            <Stack.Screen
              name="home"
              component={MainScreen}
              options={{ title: "Home" + user.user }}
            />
            <Stack.Screen
              name="kat1"
              component={CategoryOneScreen}
              options={{ title: "Kategori 1" }}
            />
            <Stack.Screen
              name="kat2"
              component={CategoryTwoScreen}
              options={{ title: "Kategori 2" }}
            />
            <Stack.Screen
              name="kat3"
              component={CategoryThreeScreen}
              options={{ title: "Kategori 3" }}
            />
            <Stack.Screen
              name="kat4"
              component={CategoryFourScreen}
              options={{ title: "Kategori 4" }}
            />
            <Stack.Screen
              name="catbreedinfo"
              component={CatBreedInfoScreen}
              options={{ title: "Breed details" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContextProvider>
    </Fragment>
  )
}
