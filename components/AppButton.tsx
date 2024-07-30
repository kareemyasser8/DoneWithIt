import colors from "@/app/config/colors"
import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export type ColorKeys = keyof typeof colors

interface Props {
  title: string
  onPress: () => void
  color?: ColorKeys
}

const AppButton = ({ title, onPress, color ="primary" as ColorKeys}: Props) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
})

export default AppButton
