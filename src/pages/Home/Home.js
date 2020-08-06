import React, { useContext } from 'react'
import { View } from 'react-native'
import { AppText } from '../../components/AppText'
import { Button } from '../../components/Button'

import AuthContext from '../../contexts/auth'

import colors from '../../../assets/colors'

export default function Home() {
  const { logout } = useContext(AuthContext)

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
      color={colors.secundary}
      onPress={logout}
      >
        Logout
      </Button>
    </View>
  )
}
