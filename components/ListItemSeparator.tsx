import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "@/app/config/colors"

const ListItemSeparator = () => {
  return <View style={styles.separator} />
}

export default ListItemSeparator

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
})
