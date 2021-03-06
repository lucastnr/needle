import React from 'react'
import { View, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native'

import colors from '../../../assets/colors'
import Back from '../../../assets/icons/left-arrow.svg'

const windowWidth = Dimensions.get('window').width

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.goBack()}
      >
        <Back width={24} height={24} />
      </TouchableOpacity>

      <Image
        source={require('../../../assets/needle-text/needle-white.png')}
        resizeMode={'contain'}
        style={styles.logo}
      />

      <View style={{ width: 24 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.secundary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth,
    paddingLeft: 16,
    paddingRight: 16,
    height: 56
  },
  logo: {
    width: 120,
    height: 32
  }
})
