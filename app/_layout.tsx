import "react-native-reanimated"

import routes from "@/components/navigation/routes"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useRef, useState } from "react"
import { AuthProvider } from "@/auth/AuthContext"
import * as Notifications from "expo-notifications"
import useNotifications from "@/hooks/useNotifications"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  })

  const {
    registerForPushNotificationsAsync,
    redirect,
  } = useNotifications()
  
  const [expoPushToken, setExpoPushToken] = useState<string>()
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined)
  const notificationListener = useRef<Notifications.Subscription>()
  const responseListener = useRef<Notifications.Subscription>()

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    }),
  })

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token))
      .catch((err) => console.log(err))

    // schedulePushNotification()
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err))

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification)
      })

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        redirect(response.notification)
      })

    if (loaded) {
      SplashScreen.hideAsync()
    }

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        )
      }

      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current)
      }
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name={routes.tabs} options={{ headerShown: false }} />
        <Stack.Screen name={routes.auth} options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </AuthProvider>
  )
}
