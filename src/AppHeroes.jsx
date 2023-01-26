import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const AppHeroes = () => {
  return (
    <>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
    </>
  )
}