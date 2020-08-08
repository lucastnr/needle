import React from 'react'
import { View } from 'react-native'
import { CircleButton } from '../../components/CircleButton'

import { useAuth } from '../../contexts/auth'
import { BottomBar } from '../../components/BottomBar'

import colors from '../../../assets/colors'
import styles from '../Home/styles'

export default function Home() {
  const { logout } = useAuth()

  return (
    <>
      <View style={styles.main}>
        <View style={styles.button}>
          <CircleButton
           color={colors.secundary}
           onPress={logout}
          >
            Sair
          </CircleButton>
        </View>
      </View>

      <BottomBar />
    </>
  )
}

