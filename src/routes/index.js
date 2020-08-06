import React, { useState, useContext } from 'react'

import AppRoutes from './AppRoutes'
import AuthRoutes from './AuthRoutes'
import AuthContext from '../contexts/auth'

export default function Routes() {
  const { signed } = useContext(AuthContext)
  return signed ? <AppRoutes /> : <AuthRoutes />
}
