import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from './src/pages/Login'
import { Register } from './src/pages/Register'
import { Forgot } from './src/pages/Forgot'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
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
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Forgot' component={Forgot} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App