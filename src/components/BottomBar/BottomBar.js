import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'

import colors from '../../../assets/colors'

const windowWidth = Dimensions.get('window').width;

export default function BottomBar() {
  return (
    <View style={styles.bottomBar}>
    </View>
  )
}
const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: colors.darkPrimary,
    flexDirection: 'row',
    justifyContent: 'center',
    width: windowWidth,
    height: 64
  }
})