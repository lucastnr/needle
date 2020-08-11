import React from 'react'
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { AppText } from '../AppText'

const windowWidth = Dimensions.get('window').width;

export default function Button({ children, color, onPress, hide, loading, width }) {
  function press() {
    if (onPress) return onPress()
  }

  function Content() {
    if (loading) {
      return <ActivityIndicator size='large' color='white' />
    }

    return (
      <AppText style={styles.text}>
        {children}
      </AppText>
    )
  }

  if (!width) width = windowWidth - 80

  if (hide) return (
    <View
      style={[{ backgroundColor: color, width }, styles.hide]}
      onPress={() => press()}
    >
      <AppText style={styles.text}>
        {children}
      </AppText>
    </View>
  )
  return (
    <TouchableOpacity
      style={[{ backgroundColor: color, width }, styles.main]}
      activeOpacity={0.8}
      onPress={() => press()}
    >
      <Content />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 360
  },
  hide: {
    width: windowWidth - 80,
    height: 56,
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
