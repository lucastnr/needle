import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'

import { AppText } from '../../components/AppText'
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
      <AppText
        style={styles.modalText}
      >
        {'Cheque seu e-mail e siga as instruções para redefinir \na senha.'}
      </AppText>
    )
    return (
      <AppText
        style={styles.description}
      >
        {'Esqueceu sua senha? Coloque seu e-mail para\nrecuperá-la.'}
      </AppText>
    )
  }

  async function toggleModal() {
    if (!recovered) setRecovered(true)
  }

  return (
    <>
      <View style={styles.top}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
        >
          <Close width={24} height={24} />
        </TouchableOpacity>

        <Image
          source={require('../../../assets/needle-text/needle-blue.png')}
          resizeMode={'contain'}
          style={styles.logo}
        />

        <View style={{ width: 24 }} />
      </View>

      <View style={styles.main}>

        <View />

        <View>
          {showModal()}
        </View>

        <View style={styles.inputView}>
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
    </>
  )
}
