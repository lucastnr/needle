import React, { useState } from 'react'
import { View, ScrollView, TextInput } from 'react-native'

import { AppText } from '../../components/AppText'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'

import styles from './styles'
import colors from '../../../assets/colors'

export default function Register({ route, navigation }) {

  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [Birthday, setBirthday] = useState('')

  if (!isNumber(cpf) && cpf != '') setCpf(cpf.substr(0, cpf.length - 1))

  return (
    <>
      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.main}>
        <View style={styles.inputView}>

          <AppText
            style={styles.label}
          >CPF</AppText>
          <TextInput
            style={styles.input}
            placeholder='Apenas números'
            keyboardType='number-pad'
            textContentType='postalCode'
            onChangeText={text => setCpf(text)}
            value={cpf}
          />

          <AppText
            style={styles.label}
          >E-mail</AppText>
          <TextInput
            style={styles.input}
            placeholder='email@email.com'
            autoCompleteType='email'
            onChangeText={text => setEmail(text)}
          />

          <AppText
            style={styles.label}
          >Senha</AppText>
          <TextInput
            style={styles.input}
            placeholder='No mínimo 6 caractéres'
            autoCompleteType='password'
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />

          <AppText
            style={styles.label}
          >Digite sua senha novamente</AppText>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            onChangeText={text => setPassword2(text)}
          />

          <AppText
            style={styles.label}
          >Digite sua data de nascimento</AppText>
          <TextInput
            style={styles.input}
            placeholder='DD/MM/AAAA'
            onChangeText={text => setBirthday(text)}
          />
        </View>
        
        <View style={styles.buttonView}>
          <Button color={colors.secundary}>
            Cadastrar
        </Button>
        </View>
      </ScrollView>
    </>
  )
}

function isNumber(cpf) {
  let containsDot = false

  if ((cpf.length == 1 && cpf == '.')
    || (cpf && cpf.indexOf('.') != -1)) containsDot = true

  return !isNaN(parseFloat(cpf)) && isFinite(cpf) && !containsDot
}