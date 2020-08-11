import React, { useState } from 'react'
import { View, Image, Alert, Keyboard } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

import { AppText } from '../../components/AppText'
import { Button } from '../../components/Button'
import colors from '../../../assets/colors'

import { useAuth } from '../../contexts/auth'

import styles from './styles'
import { Error } from '../../components/Error'


export default function Login({ route, navigation }) {
  const { signIn, logging, error } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // if (error) Alert.alert('Erro!', 'Login informado é errado.')
  return (
    <>
    <Error>
      Opa! Acho que seu login ou senha estão incorretos.
    </Error>
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
            onPress={() => {
              Keyboard.dismiss()
              signIn(email, password)
            }}
            loading={logging}
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
    </>
  )
}