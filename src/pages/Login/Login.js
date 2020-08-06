import React, { useState, useContext } from 'react'
import { View, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import { AppText } from '../../components/AppText'
import { Button } from '../../components/Button'
import colors from '../../../assets/colors'

import AuthContext from '../../contexts/auth'

import styles from './styles'


export default function Login({ route, navigation }) {
  const { user, signed, signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.main}>
      <View>
        <Image
          source={require('../../../assets/needle-text/needle-blue.png')}
          resizeMode={'contain'}
          style={styles.logo}
        />
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
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Register')}
        >
          <AppText
            style={styles.register}
            bold={true}
          >
            Não tem conta? Clique aqui
          </AppText>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <Button
          color={colors.secundary}
          onPress={signIn}
        >
          Entrar
        </Button>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Forgot')}
        >
          <AppText
            style={styles.forgot}
            bold={true}
          >
            Esqueceu sua senha?
          </AppText>
        </TouchableOpacity>
      </View>
    </View >
  )
}