import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import colors from '../../../assets/colors'

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
        <Text style={styles.text}>
          {children}
        </Text>
      </View>
    )
  }

  return (
    <TouchableOpacity
      style={[{ backgroundColor: color }, styles.main]}
      activeOpacity= {0.8}
      onPress={() => press()}
    >
      <Text style={styles.text}>
        {children}
      </Text>
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
    fontWeight: "bold",
    fontSize: 24
  }
})
