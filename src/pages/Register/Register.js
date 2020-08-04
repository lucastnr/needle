import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from '../../components/Button'

import styles from './styles'

import Close from "../../assets/close.svg"

export default function Register({ route, navigation }) {

  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [Birthday, setBirthday] = useState("")
  return (
    <View style={styles.main}>

      <View style={styles.top}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
        >
          <Close width={24} height={24} />
        </TouchableOpacity>

        <Text style={styles.title}>
          Registre-se!
        </Text>

        <View style={{ width: 24 }} />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="CPF"
          onChangeText={text => setCpf(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          autoCompleteType="email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCompleteType="password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          secureTextEntry={true}
          onChangeText={text => setPassword2(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de nascimento Ex: DD/MM/AAAA"
          onChangeText={text => setBirthday(text)}
        />

      </View>

      <View style={styles.buttonView}>
        <Button color="#2F80ED">
          Cadastrar
        </Button>
      </View>

    </View >
  )
}
