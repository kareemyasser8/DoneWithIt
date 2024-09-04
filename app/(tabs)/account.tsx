import { ColorKeys } from "@/components/AppButton"
import Icon, { MaterialIconName } from "@/components/Icon"
import ListItem from "@/components/ListItem"
import ListItemSeparator from "@/components/ListItemSeparator"
import Screen from "@/components/Screen"
import useAuth from "@/auth/useAuth"
import React from "react"
import { FlatList, StyleSheet, View } from "react-native"


interface MenuItem {
  title: string
  icon: { name: MaterialIconName; backgroundColor: ColorKeys }
}

const menuItems: MenuItem[] = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: "primary" },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: "secondary" },
  },
]

const AccountScreen = () => {
  const { user, onLogout } = useAuth()
  
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title={user?.name ? user.name : ""}
          subTitle={user?.email}
          image={require("@/assets/images/mosh.jpg")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  iconName={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="Log Out"
        onPress={onLogout}
        IconComponent={<Icon iconName="logout" backgroundColor="yellow" />}
      />
    </Screen>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
})
