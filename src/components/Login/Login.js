import React from 'react'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import styles from "./styles"

export default function Login() {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Log In</Text>

      <View style={styles.inputView}>
        <View style={styles.input}>
          <TextInput placeholder="Nome"/>
        </View>
        <View style={styles.input}>
          <TextInput textContentType="password" placeholder="Senha"/>
        </View>
      </View>
      
    </View>
  ) 
}
