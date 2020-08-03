import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from '../../components/Button'

import styles from './styles'

import Close from "../../assets/close.svg"

export default function Register({ route, navigation }) {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Close width={20} height={20}/>
        <Text style={styles.title}>
          Registre-se!
        </Text>
        <Text>
          Login
        </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          autoCompleteType="email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          autoCompleteType="password"
          textContentType="password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.register}>
            Não tem conta? Clique aqui
        </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonView}>
        <Button color="#2F80ED">
          Entrar
        </Button>

        <TouchableOpacity
          activeOpacity={0.7}
        >
          <Text style={styles.forgot}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

    </View >
  )
}
