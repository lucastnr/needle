import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

import * as auth from '../services/auth'

const AuthContext = createContext({}) // Cria o contexto

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true) // Loading inicial
  const [logging, setLogging] = useState(false) // Se está logando
  const [error, setError] = useState(false) // Se está logando

  useEffect(() => { // Roda toda vez que o AuthContext for gerado
    async function loadStoragedData() { // Pega os dados do usuário e verifica se está logado
      const storagedUser = await AsyncStorage.getItem('@Needle:user')
      // const storagedToken = await AsyncStorage.getItem('@Needle:token')

      if (storagedUser /*&& storagedToken*/) { // Verifica se os dados do usuário existem, ou seja, se está logado
        setUser(JSON.parse(storagedUser)) // Seta o estado do usuário com o que estava guardado
      }
      setLoading(false) // Desativa o loading
    }

    loadStoragedData()
  }, [])

  async function signIn(email, password) { // Função que loga
    setError(false)
    setLogging(true)
    const response = await auth.signIn(email, password) // Chama o serviço signIn

    // Seta o usuário com a resposta do sistema
    if (response) {
      setUser(response)
      await AsyncStorage.setItem('@Needle:user', JSON.stringify(response))
      // await AsyncStorage.setItem('@Needle:token', response.token)
    } else {
      setError(true)
    }
    setLogging(false)
  }

  async function logout() { // Função que desloga
    await AsyncStorage.clear() // Limpa o armazenamento(Usuário e token)
    setUser(null) // Seta o usuário como nulo
  }

  function toggleError() { setError(!error) }

  return (
    <AuthContext.Provider value={{ // Seta os dados do provider
      signed: !!user,
      user,
      signIn,
      logout,
      loading,
      logging,
      error,
      toggleError
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() { // Cria um hook com os dados do context
  const context = useContext(AuthContext)
  return context
}
