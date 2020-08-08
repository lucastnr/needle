import React from 'react'
import { View, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppText } from '../AppText'

const windowWidth = Dimensions.get('window').width;

export default function CircleButton({ children, color, onPress, hide, loading }) {
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

  if (hide) return (
    <View
      style={[{ backgroundColor: color }, styles.hide]}
      onPress={() => press()}
    >
      <AppText style={styles.text}>
        {children}
      </AppText>
    </View>
  )
  return (
    <View style={[{ backgroundColor: color }, styles.main]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => press()}
      >
        <Content />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: 56,
    height: 56,
    alignItems: "center",
        flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 56
  },
  hide: {
    width: 56,
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
