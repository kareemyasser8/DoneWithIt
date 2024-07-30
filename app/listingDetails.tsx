import { View, Text, StyleSheet, Image } from "react-native"
import React from "react"
import colors from "./config/colors"
import ListItem from "@/components/ListItem"
import AppButton from "@/components/AppButton"

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("@/assets/images/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Red Jacket for sale</Text>
        <Text style={styles.price}>$100</Text>
        <View style={styles.userContainer}>
            <ListItem
                image= {require("@/assets/images/mosh.jpg")}
                title= "Mosh Hamedani"
                subTitle = "5 Listings"
                onPress={()=> console.log("Message Selected")}
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
  detailsContainer:{
    padding: 20,
    marginVertical: 10
  },
  userContainer:{
    marginVertical: 30
  },
  title:{
    fontSize: 24,
    fontWeight: "bold"
},
price:{
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold"
}
})

export default ListingDetailsScreen
