import { StyleSheet, Text, View } from "react-native"
import React, { PropsWithChildren } from "react"
import Constants from "expo-constants"

const paddingTop = Constants.statusBarHeight
const Screen = ({ children }: PropsWithChildren) => {
  return <View style={styles.screen}>{children}</View>
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop,
    flex: 1
  },
})
