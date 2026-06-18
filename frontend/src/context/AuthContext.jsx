import React, { createContext, useState, useEffect } from 'react'
import { authService } from '../services/api'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    const savedToken = localStorage.getItem('authToken')

    if (savedUser && savedToken) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Failed to load user:', error)
        localStorage.removeItem('user')
        localStorage.removeItem('authToken')
      }
    }
  }, [])

  const login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await authService.login({ email, password })
      const { token, user: userData } = response.data

      localStorage.setItem('authToken', token)
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)

      return { success: true, user: userData }
    } catch (err) {
      const message = err.response?.data?.message || 'Login failed'
      setError(message)
      return { success: false, error: message }
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name, email, password, phone) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await authService.signup({ name, email, password, phone })
      const { token, user: userData } = response.data

      localStorage.setItem('authToken', token)
      localStorage.setItem('user', JSON.stringify(userData))
      setUser(userData)

      return { success: true, user: userData }
    } catch (err) {
      const message = err.response?.data?.message || 'Signup failed'
      setError(message)
      return { success: false, error: message }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('user')
    setUser(null)
    authService.logout()
  }

  const isAuthenticated = !!user

  const value = {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    signup,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
