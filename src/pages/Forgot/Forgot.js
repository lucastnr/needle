import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'

import { AppText } from '../../components/AppText'
import { Button } from '../../components/Button'

import styles from './styles'
import colors from '../../../assets/colors'

import Header from '../../components/Header/Header'

export default function Forgot({ navigation }) {
  const [email, setEmail] = useState('')
  const [recovered, setRecovered] = useState(false)

  let placeholder = 'Digite seu e-mail'
  if (recovered) placeholder = email

  function showDescription() {
    if (recovered) return (
      <AppText style={[{color: colors.gray2}, styles.description]}>
        {'Cheque seu e-mail e siga as instruções para redefinir a senha.'}
      </AppText>
    ); return (
      <AppText style={[{color: colors.primary}, styles.description]}>
        Esqueceu sua senha? Coloque seu e-mail para recuperá-la.
      </AppText>
    )
  }
  function toggleModal() { if (!recovered) setRecovered(true) }

  return (
    <>
      <Header navigation={navigation} />

      <View style={styles.main}>
        <View style={styles.spacer}/>

        <View>
          {showDescription()}
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            autoCompleteType='email'
            onChangeText={text => setEmail(text)}
            editable={!recovered}
          />
        </View>

        <View style={styles.spacer}/>

        <View style={styles.buttonView}>
          <Button color={colors.secundary}
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
