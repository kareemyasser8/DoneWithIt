import { useEffect, useState } from "react"
import * as Location from "expo-location"

interface Location {
  latitude: number
  longitude: number
}

const useLocation = () => {
  const [location, setLocation] = useState<Location>({} as Location)

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync()
      if (!granted) return

      const location = await Location.getLastKnownPositionAsync()
      if (location && location.coords) {
        const {
          coords: { latitude, longitude },
        } = location
        setLocation({ latitude, longitude })
      }
    } catch (error) {
      console.log("Error in getting the location: ", error)
    }
  }

  return location
  
}

export default useLocation
