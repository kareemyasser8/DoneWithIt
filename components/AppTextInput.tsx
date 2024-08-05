import colors from "@/app/config/colors"
import defaultStyles from "@/app/config/styles"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import { DimensionValue, StyleSheet, TextInput, TextInputProps, View } from "react-native"

import { MaterialIconName } from "./Icon"

interface Props extends TextInputProps {
  icon?: MaterialIconName
  width?: DimensionValue | undefined
}

let containerWidth

const AppTextInput = ({ icon, width = "100%", ...rest }: Props) => {
  containerWidth = width

  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={defaultStyles.text}
        {...rest}
      />
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 12,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
})
