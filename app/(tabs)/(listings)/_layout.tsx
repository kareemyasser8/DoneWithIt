import colors from "@/app/config/colors"
import AppButton from "@/components/AppButton"
import Icon from "@/components/Icon"
import routes from "@/components/navigation/routes"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Stack, useRouter } from "expo-router"
import React from "react"
import { Button, Pressable, View } from "react-native"

const ListingsLayout = () => {
  const router = useRouter()

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={routes.listingDetails}
        options={{
          headerStyle: { backgroundColor: colors.primary },
          title: "",
          headerLeft: () => (
            <Pressable onPress={() => router.back()}>
              <Icon iconName={"arrow-left"} />
            </Pressable>
          ),
          presentation: "card",
        }}
      />
    </Stack>
  )
}

export default ListingsLayout
