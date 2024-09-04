import * as SecureStore from 'expo-secure-store';
import { jwtDecode } from 'jwt-decode';
import { User } from './AuthContext';

const TOKEN_KEY = "authToken"

const storeToken = async (authToken: string) => {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, authToken)
  } catch (error) {
    console.log("Error storing the auth token")
  }
}

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY)
  } catch (error) {
    console.log("Error getting the Auth token", error)
  }
}

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY)
  } catch (error) {
    console.log("Error removing the auth token ", error)
  }
}

const getUser = async () => {
  const token = await getToken()
  return token ? jwtDecode<User>(token) : null
}

export default { getToken,  getUser, removeToken, storeToken }
