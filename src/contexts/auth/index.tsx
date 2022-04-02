import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'
import axiosClient from '../../config/client'

//api here is an axios instance which has the baseURL set according to the env.

const AuthContext = createContext({})
interface Props {
  children: React.ReactNode
}
export const AuthProvider = (props: Props) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get('JWT_TOKEN')
      if (token) {
        axiosClient.defaults.headers.common['Authorization'] = token
        const { data: user } = await axiosClient.get(
          'https://jsonplaceholder.typicode.com/todos/1',
        )
        if (user) setUser(user)
      }
      setLoading(false)
    }
    loadUserFromCookies()
  }, [])

  const login = async (email: string, password: string) => {
    // const { data: token } = await api.post('auth/login', { email, password })
    // if (token) {
    //   console.log('Got token')
    //   Cookies.set('token', token, { expires: 60 })
    //   api.defaults.headers.Authorization = `Bearer ${token.token}`
    //   const { data: user } = await api.get('users/me')
    //   setUser(user)
    //   console.log('Got user', user)
    // }
  }

  const logout = (email: string, password: string) => {
    // Cookies.remove('token')
    // setUser(null)
    // delete api.defaults.headers.Authorization
    // window.location.pathname = '/'
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated: !!user, user, login, loading, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
