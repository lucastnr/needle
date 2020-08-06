import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Forgot } from '../pages/Forgot'

const AppStack = createStackNavigator()

export default function AuthRoutes() {
  return (
    <AppStack.Navigator
      initialRouteName='Login'
      screenOptions={
        {
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
    >
      <AppStack.Screen name='Login'>
        {props => <Login navigation={props.navigation} route={props.route} />}
      </AppStack.Screen>
      <AppStack.Screen name='Register'>
        {props => <Register navigation={props.navigation} route={props.route} />}
      </AppStack.Screen>
      <AppStack.Screen name='Forgot'>
        {props => <Forgot navigation={props.navigation} route={props.route} />}
      </AppStack.Screen>
    </AppStack.Navigator>
  )
}
