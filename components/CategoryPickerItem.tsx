import { CategoryItem } from "@/app/listingEditing"
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"

import AppText from "./AppText"
import Icon from "./Icon"

interface Props {
  item: CategoryItem
  onPress: () => void
}

const CategoryPickerItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Icon
          backgroundColor={item.backgroundColor}
          iconName={item.iconName}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
})
