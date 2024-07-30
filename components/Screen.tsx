import { StyleSheet, Text, View } from "react-native"
import React, { PropsWithChildren, ReactNode } from "react"
import Constants from "expo-constants"

interface Props{
  children: ReactNode,
  style?: any
}

const paddingTop = Constants.statusBarHeight
const Screen = ({ children, style }: Props) => {
  return <View style={[styles.screen, style]}>{children}</View>
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    paddingTop,
    flex: 1
  },
})
