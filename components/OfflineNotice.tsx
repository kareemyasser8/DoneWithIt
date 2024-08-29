import { StyleSheet, Text, View } from "react-native"
import React from "react"
import Constants from "expo-constants"
import colors from "@/app/config/colors"
import { useNetInfo } from "@react-native-community/netinfo"

const OfflineNotice = () => {
  const { type, isInternetReachable, isConnected } = useNetInfo()

  if (type !== "unknown" && isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet connection</Text>
      </View>
    )

  return null
}

export default OfflineNotice

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
})
