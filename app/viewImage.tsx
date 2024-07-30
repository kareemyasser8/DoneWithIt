import { router } from "expo-router"
import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "./config/colors"

const ViewImageScreen = () => {
  const navigateToHomePage = () => {
    router.push("/welcome")
  }

  const navigateToMessages = () => {
    router.push("/messages")
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navigatorsBtns}>
        <Pressable onPress={navigateToHomePage}>
          <MaterialCommunityIcons name="close" color={colors.white} size={35} />
        </Pressable>
        <Pressable onPress={navigateToMessages}>
          <MaterialCommunityIcons name="delete" color={colors.white} size={35} />
        </Pressable>
      </View>
      <Image
        style={styles.productImage}
        source={require("@/assets/images/chair.jpg")}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  navigatorsBtns: {
    // height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    width: "100%",
    // backgroundColor: "red"
    // position: "absolute",
    // top: 40
    // marginBottom: 50
  },
  btn: {
    width: 50,
    height: 50,
  },
  homeBtn: {
    backgroundColor: colors.primary,
  },
  viewImageBtn: {
    backgroundColor: colors.secondary,
  },
  productImage: {
    resizeMode: "contain",
    height: "100%",
    width: "100%",
  },
})

export default ViewImageScreen
