import React, { useState } from 'react'
import { View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from '../../components/Button'

import styles from './styles'

import Close from "../../../assets/close.svg"
import { isNumericLiteral } from 'typescript'

export default function Register({ route, navigation }) {

  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [Birthday, setBirthday] = useState("")

  if (!isNumber(cpf) && cpf != "") setCpf(cpf.substr(0, cpf.length - 1))

  return (
    <ScrollView contentContainerStyle={styles.main}>
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

        <Text style={styles.label}>CPF</Text>
        <TextInput
          style={styles.input}
          placeholder="Apenas números"
          keyboardType="number-pad"
          textContentType="postalCode"
          onChangeText={text => setCpf(text)}
          value={cpf}
        />

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          autoCompleteType="email"
          onChangeText={text => setEmail(text)}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCompleteType="password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <Text style={styles.label}>Digite sua senha novamente</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          secureTextEntry={true}
          onChangeText={text => setPassword2(text)}
        />

        <Text style={styles.label}>Data de nascimento</Text>
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
    </ScrollView>
  )
}

function isNumber(cpf) {
  let containsDot = false

  if ((cpf.length == 1 && cpf == ".") 
  || (cpf && cpf.indexOf('.') != -1)) containsDot = true

  return !isNaN(parseFloat(cpf)) && isFinite(cpf) && !containsDot
}