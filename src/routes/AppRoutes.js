import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/Home'

const AppStack = createStackNavigator()

export default function AppRoutes() { // Stack de quando se está logado
  return (
    <AppStack.Navigator
      initialRouteName='Home'
      screenOptions={ // Opções que vão para todas as páginas do stack
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
