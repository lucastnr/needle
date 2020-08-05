import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Forgot } from './pages/Forgot'
import { Home } from './pages/Home'

const Stack = createStackNavigator()

const App = () => {
  const [logged, setLogged] = useState(false)

  function login() {
    setLogged(true)
  }

  function logout() {
    setLogged(false)
  }

  function isLogged() {
    if (logged)
      return (
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={
            {
              headerShown: false,
              cardStyle: {
                backgroundColor: 'white'
              }
            }}
        >
          <Stack.Screen name='Home'>
            {props => <Home logout={logout} />}
          </Stack.Screen>
        </Stack.Navigator>
      )

    return (
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={
          {
            headerShown: false,
            cardStyle: {
              backgroundColor: 'white'
            }
          }}
      >
        <Stack.Screen name='Login'>
          {props => <Login login={login}/>}
        </Stack.Screen>
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Forgot' component={Forgot} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      {isLogged()}
    </NavigationContainer >
  )
}

export default App