import React from 'react'
import { View } from 'react-native'
import { AppText } from '../../components/AppText'
import { Button } from '../../components/Button'

import colors from '../../../assets/colors'

export default function Home({ logout }) {
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
