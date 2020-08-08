import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { CircleButton } from '../CircleButton'
import { useAuth } from '../../contexts/auth'

import colors from '../../../assets/colors'

const windowWidth = Dimensions.get('window').width;
const windowheight = Dimensions.get('window').height;

export default function BottomBar() {
  const { logout } = useAuth()

  return (
    <View style={styles.bottomBar}>
      <CircleButton
            color={colors.secundary}
            onPress={logout}
            >
              Sair
            </CircleButton>
            <CircleButton
            color={colors.secundary}
            onPress={logout}
            >
              Sair
            </CircleButton>
            <CircleButton
            color={colors.secundary}
            onPress={logout}
            >
              Sair
            </CircleButton>
            <CircleButton
            color={colors.secundary}
            onPress={logout}
            >
              Sair
            </CircleButton>
    </View>
  )
}
const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: colors.darkPrimary,
    flexDirection: 'row',
    justifyContent: 'center',
    
    width: windowWidth,
    height: 64,
    justifyContent: "space-around",
    alignItems: "center"
  }
})