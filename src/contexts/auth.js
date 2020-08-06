import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import * as auth from '../services/auth'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await AsyncStorage.getItem('@Needle:user')
      const storagedToken = await AsyncStorage.getItem('@Needle:token')

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser))
        setTimeout(() => setLoading(false), 2000)
        
      }
    }

    loadStoragedData()
  }, [])

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user)
    await AsyncStorage.setItem('@Needle:user', JSON.stringify(response.user))
    await AsyncStorage.setItem('@Needle:token', response.token)
  }

  async function logout() {
    await AsyncStorage.clear()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      signIn,
      logout,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
