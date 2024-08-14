import React from "react"
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native"
import colors from "@/app/config/colors"

import ListItem from "@/components/ListItem"
import { useLocalSearchParams, useRouter } from "expo-router"

const ListingDetailsScreen = () => {
  const listing = useLocalSearchParams()

  const imageLookup: { [key: string]: ImageSourcePropType } = {
    jacket: require("@/assets/images/jacket.jpg"),
    couch: require("@/assets/images/couch.jpg"),
  }

  return (
    <View>
      <Image
        style={styles.image}
        source={imageLookup[listing.imageToRender as string]}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
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
