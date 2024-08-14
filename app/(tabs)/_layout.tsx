import Icon from "@/components/Icon"
import TabIcon from "@/components/TabIcon"
import { Tabs } from "expo-router"

import colors from "../config/colors"

const TabsLayout = () => (
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
        title: "Feed",
        headerShown: false,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} name="home" />,
      }}
    />

    <Tabs.Screen
      name="listingEditing"
      options={{
        headerShown: false,
        title: "",
        tabBarIcon: () => (
          <Icon backgroundColor={"primary"} iconName="plus"></Icon>
        ),
      }}
    />

    <Tabs.Screen
      name="account"
      options={{
        title: "Account",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} name="account" />
        ),
      }}
    />
  </Tabs>
)

export default TabsLayout
