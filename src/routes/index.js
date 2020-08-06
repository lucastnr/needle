import React, { useState } from 'react'

import AppRoutes from './AppRoutes'
import AuthRoutes from './AuthRoutes'
import { useAuth } from '../contexts/auth'
import { Loading } from '../components/Loading'

export default function Routes() {
  const { signed, loading } = useAuth()

  if (loading) return <Loading />

  return signed ? <AppRoutes /> : <AuthRoutes />
}
