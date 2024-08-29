import NewListingButton from "@/components/navigation/NewListingButton"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Tabs, useRouter } from "expo-router"

import colors from "../config/colors"
import routes from "@/components/navigation/routes"
import OfflineNotice from "@/components/OfflineNotice"

const TabsLayout = () => {
  const router = useRouter()

  return (
    <>
      <OfflineNotice/>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          headerTintColor: colors.primary,
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tabs.Screen
          name={routes.listEditing}
          options={{
            headerShown: false,
            title: "",
            tabBarButton: () => (
              <NewListingButton onPress={() => router.push("listingEditing")} />
            ),
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                color={color}
                size={size}
                name="plus-circle"
              />
            ),
          }}
        />

        <Tabs.Screen
          name={routes.account}
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                color={color}
                size={size}
                name="account"
              />
            ),
          }}
        />

        <Tabs.Screen
          name={routes.listings}
          options={{
            headerShown: false,
            href: null,
          }}
        />

        <Tabs.Screen
          name={routes.uploadScreen}
          options={{
            headerShown: false,
            href: null,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout
