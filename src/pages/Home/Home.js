import React from 'react'
import { View, Image, ScrollView } from 'react-native'
import { CircleButton } from '../../components/CircleButton'

import { useAuth } from '../../contexts/auth'
import { BottomBar } from '../../components/BottomBar'
import { Header } from '../../components/Header'

import colors from '../../../assets/colors'
import styles from '../Home/styles'

export default function Home({ navigation }) {
  const { logout } = useAuth()

  return (
    <>
    {/* <View style={styles.header}>
      <Image
          source={require('../../../assets/needle-text/needle-blue.png')}
          resizeMode={'contain'}
          style={styles.logo}
          />      
    </View> */}
    <Header navigation={navigation}/>
    <CircleButton color="aqua"onPress={logout}>Sair</CircleButton>

    <ScrollView contentContainerStyle={styles.main}>
    </ScrollView>

    <BottomBar />
  </>
  )
}

