import useListings from "@/hooks/useListings"
import colors from "@/app/config/colors"
import AppButton from "@/components/AppButton"
import AppText from "@/components/AppText"
import Card from "@/components/Card"
import routes from "@/components/navigation/routes"
import Screen from "@/components/Screen"
import { router } from "expo-router"
import React from "react"
import { FlatList, StyleSheet } from "react-native"
import ActivityIndicator from "@/components/ActivityIndicator"

const ListingScreen = () => {
  const { listings, isLoading, error, getListings } = useListings()

  if (isLoading) return <ActivityIndicator visible={true} />

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retrieve the listings</AppText>
          <AppButton title="Rety" onPress={getListings} />
        </>
      )}

      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            onPress={() =>
              router.push({
                pathname: routes.listingDetails,
                params: item.id as any,
              })
            }
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url || "https://placehold.co/600x400"}
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
