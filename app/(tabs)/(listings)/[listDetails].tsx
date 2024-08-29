import colors from '@/app/config/colors';
import ListItem from '@/components/ListItem';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ListingDetailsScreen = () => {
  const { listing } = useLocalSearchParams()
  const parsedListing = JSON.parse(listing as string)

  return (
    <View>
      <Image
        style={styles.image}
        source={{ uri: parsedListing?.images[0].url }}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{parsedListing?.title}</Text>
        <Text style={styles.price}>{parsedListing?.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("@/assets/images/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
            onPress={() => console.log("Message Selected")}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
  },
})

export default ListingDetailsScreen
