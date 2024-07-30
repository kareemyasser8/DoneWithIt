import { View } from "react-native"
import WelcomeScreen from "./welcome"
import ListingDetailsScreen from "./listingDetails"
import Card from "@/components/Card"
import ViewImageScreen from "./viewImage"
import MessagesScreen from "./messages"
import Screen from "@/components/Screen"
import Icon from "@/components/Icon"
import ListItem from "@/components/ListItem"
import AccountScreen from "./account"
import ListingScreen from "./listing"

export default function HomeScreen() {
  // return <WelcomeScreen />

  return (
    // <Screen>
    //   <ListItem
    //     title="My title"
    //     ImageComponent={<Icon size={50} iconName={"email"} />}
    //   />
    // </Screen>
    <ListingScreen/>
  )

  // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
  //   <Card
  //     title="Red jacket for sales"
  //     subTitle="$100"
  //     image={require("@/assets/images/jacket.jpg")}
  //   />
  // </View>
}
