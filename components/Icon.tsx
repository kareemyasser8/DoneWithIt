import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { ColorKeys } from "./AppButton"
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons"
import colors from "@/app/config/colors"

export type MaterialIconName = keyof typeof MaterialCommunityIcons.glyphMap

interface Props {
  iconName: MaterialIconName
  size?: number
  backgroundColor?: ColorKeys
  iconColor?: ColorKeys
}

const Icon = ({
  iconName,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}: Props) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors[backgroundColor],
      }}
    >
      <MaterialCommunityIcons
        size={size* 0.5}
        name={iconName}
        color={colors[iconColor]}
      />
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({})
