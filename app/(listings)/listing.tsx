import colors from '@/app/config/colors';
import Card from '@/components/Card';
import Screen from '@/components/Screen';
import { router } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

const ListingScreen = () => {
  const listings = [
    {
      id: 1,
      title: "Red Jacket for sale",
      price: 100,
      image: require("@/assets/images/jacket.jpg"),
      imageToRender: "jacket",
    },
    {
      id: 2,
      title: "Couch in great codition",
      price: 1000,
      image: require("@/assets/images/couch.jpg"),
      imageToRender: "couch",
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
            onPress={() =>
              router.navigate({ pathname: "/[listDetails]", params: item })
            }
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
    backgroundColor: colors.light,
  },
})
