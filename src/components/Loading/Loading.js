import React from 'react'
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native'

import colors from '../../../assets/colors'

export default function Loading() {
  return (
    <View style={styles.main}>
      <Image
        source={require('../../../assets/needle-text/needle-blue.png')}
        style={styles.logo}
        resizeMode={'contain'}
      />
      <ActivityIndicator size='large' color={colors.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 32
  },
  logo: {
    width: 120
  },

})
