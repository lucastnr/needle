import React, { useState } from 'react'

import AppRoutes from './AppRoutes'
import AuthRoutes from './AuthRoutes'
import { useAuth } from '../contexts/auth'
import { Loading } from '../components/Loading'

export default function Routes() {
  const { signed, loading } = useAuth() // Pega os dados do contexto
  if (loading) return <Loading /> // Retorna a página de loading
  return signed ? <AppRoutes /> : <AuthRoutes /> // Seleciona a rota dependendo de se estiver logado ou não
}
