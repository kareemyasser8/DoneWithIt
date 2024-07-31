import { StyleSheet, Text, View, TextInput, Platform } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React from "react"
import colors from "@/app/config/colors"
import defaultStyles from "@/app/config/styles"
import { MaterialIconName } from "./Icon"

interface Props {
  icon?: MaterialIconName
  [key: string]: any
}

const AppTextInput = ({ icon, ...rest }: Props) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...rest} />
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
