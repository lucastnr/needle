import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Button } from '../../components/Button'

import styles from './styles'
import colors from '../../../assets/colors'

import Close from '../../../assets/close.svg'

export default function Forgot({ navigation }) {

  const [email, setEmail] = useState('')
  const [recovered, setRecovered] = useState(false)

  let placeholder = 'Digite seu e-mail'
  if (recovered) placeholder = email

  function showModal() {
    if (recovered) return (
      <Text style={styles.modalText}>
        {'Cheque seu e-mail e siga as instruções\npara redefinir a senha.'}
      </Text>
    )
    return (
      <Text style={styles.description}>
        Esqueceu sua senha? Coloque seu e-mail para recuperá-la.
      </Text>
    )
  }

  async function toggleModal() {
    if (!recovered) {
      setRecovered(true)
      await setTimeout(() => {
        navigation.goBack()
      }, 2500);
    }
  }

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

        {showModal()}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          autoCompleteType='email'
          onChangeText={text => setEmail(text)}
          editable={!recovered}
        />
        <View style={styles.modalView}>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Button color={colors.darkPrimary}
          onPress={toggleModal}
          hide={recovered}
        >
          Recuperar senha
        </Button>
      </View>

    </View>
  )
}
