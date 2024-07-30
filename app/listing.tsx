import { FlatList, StyleSheet, Text, View } from "react-native"
import React from "react"
import Screen from "@/components/Screen"
import Card from "@/components/Card"
import colors from "./config/colors"

const ListingScreen = () => {
  const listings = [
    {
      id: 1,
      title: "Red Jacket for sale",
      price: 100,
      image: require("@/assets/images/jacket.jpg"),
    },
    {
      id: 2,
      title: "Couch in great codition",
      price: 1000,
      image: require("@/assets/images/couch.jpg"),
    },
  ]

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})
