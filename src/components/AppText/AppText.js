import React from 'react'
import { Text } from 'react-native'

export default function AppText({ children, style, bold }) {
  let family = 'Helvetica Neue'
  if (bold) family = 'Helvetica Neue Bold'

  return (
    <Text style={[{ fontFamily: family }, style]}>
      {children}
    </Text>
  )
}
