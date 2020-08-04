import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import { Button } from '../../components/Button'
import colors from '../../../assets/colors'

import styles from './styles'

export default function Login({ route, navigation }) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.main}>

      <View>
        <Text style={styles.title}>
          Bem-vindo ao Needle!
        </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu e-mail'
          autoCompleteType='email'
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          autoCompleteType='password'
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity
          activeOpacity={0.}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.register}>
            Não tem conta? Clique aqui
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <Button color={colors.darkPrimary}>
          Entrar
        </Button>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress = {() => navigation.navigate('Forgot')}
        >
          <Text style={styles.forgot}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

    </View >
  )
}