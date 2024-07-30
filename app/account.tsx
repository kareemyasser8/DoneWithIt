import { StyleSheet, Text, View, FlatList } from "react-native"
import React from "react"
import Screen from "@/components/Screen"
import ListItem from "@/components/ListItem"
import Icon, { MaterialIconName } from "@/components/Icon"
import colors from "./config/colors"
import { ColorKeys } from "@/components/AppButton"
import ListItemSeparator from "@/components/ListItemSeparator"

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
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Mosh hamedani"
          subTitle="programmingwithmosh@gmail.com"
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
        IconComponent={
            <Icon iconName="logout" backgroundColor="yellow"/>
        }
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
