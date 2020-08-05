import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import colors from '../../../assets/colors'

import { AppText } from '../AppText'

export default function Button({ children, color, onPress, hide }) {

  function press() {
    if (onPress) return onPress()
  }

  if (hide) {
    return (
      <View
        style={[{ backgroundColor: color }, styles.hide]}
        onPress={() => press()}
      >
        <AppText style={styles.text}>
          {children}
        </AppText>
      </View>
    )
  }

  return (
    <TouchableOpacity
      style={[{ backgroundColor: color }, styles.main]}
      activeOpacity= {0.8}
      onPress={() => press()}
    >
      <AppText style={styles.text}>
        {children}
      </AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    width: 360,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 360
  },
  hide: {
    width: 360,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 360,
    opacity: 0.8
  },
  text: {
    color: "white",
    fontSize: 24,
    fontFamily: 'Helvetica Neue Bold'
  }
})
