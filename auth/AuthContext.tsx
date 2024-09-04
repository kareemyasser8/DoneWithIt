import authService from "@/app/api/authService"
import { jwtDecode } from "jwt-decode"
import React, { createContext, PropsWithChildren, useState } from "react"
import authStorage from "@/auth/storage"
import { router } from "expo-router"
import registerationService from "@/app/api/registerationService"

export interface User {
  email: string
  name: string
  userId: number
  iat: number
}

interface AuthProps {
  user: User | null
  setUser: (user: User | null) => void
  onRegister: (values: any) => Promise<any>
  onLogin: (email: string, password: string) => Promise<any>
  onLogout: () => void
}

const AuthContext = createContext<AuthProps>({} as AuthProps)

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string) => {
    try {
      const result = (await authService.post({ email, password })) as string
      authStorage.storeToken(result)
      const user = jwtDecode<User>(result)
      setUser(user)
      return result
    } catch (error) {
      throw new Error(JSON.stringify(error))
    }
  }

  const register = async (userInfo: any) => {
    try {
      const result = await registerationService.post(userInfo)
      return result
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const logout = () => {
    setUser(null)
    authStorage.removeToken()
    router.navigate("/")
  }

  const value: AuthProps = {
    user,
    setUser,
    onRegister: register,
    onLogin: login,
    onLogout: logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContext
