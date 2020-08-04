import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from '../../components/Button'

import styles from './styles'

import Close from "../../../assets/close.svg"


export default function Forgot({ navigation }) {

  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")

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
          Recuperar senha
        </Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.inputView}>
        <Text style={styles.description}>
          Esqueceu sua senha? Coloque seu e-mail para recuperá-la.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          autoCompleteType="email"
          onChangeText={text => setEmail(text)}
        />
        <View style={styles.buttonView}>
          <Button color="#2F80ED" onPress={navigation.goBack}>
            Recuperar senha
          </Button>
        </View>
      </View>

      <View style={styles.spacer} />
    </View>
  )
}
