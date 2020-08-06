import React, { createContext, useState } from 'react'

import * as auth from '../services/auth'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  console.log(user)
  console.log(!!user)

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user)
  }

  function logout() { setUser(null) }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
