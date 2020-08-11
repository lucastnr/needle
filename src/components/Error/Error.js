import React from 'react'
import { View, StyleSheet, Dimensions, Image } from 'react-native'
import { AppText } from '../AppText'
import { Button } from '../Button'

import { useAuth } from '../../contexts/auth'
import colors from '../../../assets/colors'

const windowWidth = Dimensions.get('window').width
const windowheight = Dimensions.get('window').height

export default function Error({ children }) {
  const { error, toggleError } = useAuth()

  if (error) return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          style={styles.errorImg}
          source={require('../../../assets/error.png')}
          resizeMode="contain"
        />
        <AppText style={styles.text}>
          {children}
        </AppText>

        <Button
        color={colors.secundary} width={200}
        onPress={toggleError}
        >
          Ok
        </Button>
      </View>
    </View>
  )

  return <></>
}

const styles = StyleSheet.create({
  main: {
    width: windowWidth,
    height: windowheight,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: 256,
    height: 360,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 12
  },
  errorImg: {
    height: 120,
    width: 120
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    padding: 8
  }
})
