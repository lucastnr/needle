import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/Home'

const AppStack = createStackNavigator()

export default function AppRoutes() {
  return (
    <AppStack.Navigator
      initialRouteName='Home'
      screenOptions={
        {
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white'
          }
        }}
    >
      <AppStack.Screen name='Home'>
        {props => <Home navigation={props.navigation} route={props.route} />}
      </AppStack.Screen>
    </AppStack.Navigator>
  )
}
