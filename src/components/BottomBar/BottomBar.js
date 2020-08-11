import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useAuth } from '../../contexts/auth'
import { CircleButton } from '../CircleButton'
import colors from '../../../assets/colors'

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export default function BottomBar() {
  const { logout } = useAuth()

  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity
        activeOpacity={0.4}
      >

      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: colors.secundary,
    flexDirection: 'row',
    justifyContent: 'center',

    width: windowWidth,
    height: 64,
    justifyContent: "space-around",
    alignItems: "center"
  }
})