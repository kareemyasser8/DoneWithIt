import ActivityIndicator from "@/components/ActivityIndicator"
import routes from "@/components/navigation/routes"
import useAuth from "@/auth/useAuth"
import authStorage from "@/auth/storage"

import { Redirect } from "expo-router"
import React, { useEffect, useRef, useState } from "react"
import * as Device from "expo-device"
import * as Notifications from "expo-notifications"
import Constants from "expo-constants"
import { Button, Platform } from "react-native"
import useNotifications from "@/hooks/useNotifications"
import axios from "axios"
import AppButton from "@/components/AppButton"
import Screen from "@/components/Screen"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})

const index = () => {
  const { user, setUser } = useAuth()
  const [loading, setLoading] = useState(true)
  const [expoPushToken, setExpoPushToken] = useState("")
  const [channels, setChannels] = useState<Notifications.NotificationChannel[]>(
    []
  )
  const [notification, setNotification] = useState<
    Notifications.Notification | undefined
  >(undefined)
  const notificationListener = useRef<Notifications.Subscription>()
  const responseListener = useRef<Notifications.Subscription>()

  const { registerForPushNotificationsAsync, schedulePushNotification } =
    useNotifications()

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    setUser(user)
    setLoading(false)
  }

  const sendPushNotification = async () => {
    const message = {
      to: expoPushToken,
      title: "My first push notification",
      sound: "default",
      body: "This is my first push notification made with expo rn app",
    }

    await axios.post("https://exp.host/--/api/v2/push/send", message, {
      headers: {
        host: "exp.host",
        accept: "application/json",
        "accept-encoding": "gzip, deflate",
        "content-type": "application/json",
      },
    })
  }

  useEffect(() => {
    console.log("Registering for push Notifications...")

    registerForPushNotificationsAsync()
      .then((token) => {
        console.log("token: ", token)
        token && setExpoPushToken(token)
      })
      .catch((err) => console.log(err))

    restoreUser()
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        console.log(response)
        // const url = response.notification.request.content.data.url;
        // Linking.openURL(url);
      }
    )
    return () => subscription.remove()
  }, [])

  if (loading) {
    return <ActivityIndicator visible={loading} />
  }

  return (
    <>
      <Screen>
        <AppButton
          onPress={sendPushNotification}
          title="Send push notification"
        />
      </Screen>
      {/* {user ? <Redirect href={routes.tabs} /> : <Redirect href={routes.auth} />} */}
    </>
  )

  // <ListingScreen />
  // <WelcomeScreen />

  // <Screen>
  //   <Link href={"(tabs)"} asChild>
  //     <Pressable
  //       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
  //     >
  //       <Text>Go to home</Text>
  //     </Pressable>
  //   </Link>
  // </Screen>
}

export default index
