import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Button({ children, color, onPress }) {

  function press() {
    if (onPress) {
      onPress()
    }
  }

  return (
    <TouchableOpacity
      style={[{ backgroundColor: color }, styles.main]}
      activeOpacity={0.8}
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
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24
  }
})
