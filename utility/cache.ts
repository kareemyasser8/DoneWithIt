import AsyncStorage from "@react-native-async-storage/async-storage"
import moment from "moment"

const prefix = "cache"
const expiryInMinutes = 5

const store = async (key: string, value: any) => {
  try {
    const item = { value, timestamp: Date.now() }
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
  } catch (error) {
    console.log(error)
  }
}

const isExpired = <T>(item: { timestamp: Date; value: T } | null) => {
    if (!item) return true; // Treat null as expired
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, "minutes") > expiryInMinutes;
  }

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key)
    const item = value ? JSON.parse(value) : null

    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key)
      return null
    }
    return item.value
  } catch (error) {
    console.log(error)
  }
}

export default { store, get }
