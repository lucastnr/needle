import React from 'react'
import { View } from 'react-native'
import { Button } from '../../components/Button'

import { useAuth } from '../../contexts/auth'

import colors from '../../../assets/colors'

export default function Home() {
  const { logout } = useAuth()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        color={colors.secundary}
        onPress={logout}
      >
        Sair
      </Button>
    </View>
  )
}

