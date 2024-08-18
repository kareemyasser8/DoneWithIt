import colors from "@/app/config/colors"
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const NewListingButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={30}
        />
      </View>
    </TouchableOpacity>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    borderColor: "white",
    borderWidth: 10,
    borderRadius: 35,
    height: 70,
    width: 70,
    bottom: 20,
  },
})
