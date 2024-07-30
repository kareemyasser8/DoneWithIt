import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "@/app/config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"

interface Props {
  onPress?: () => void
}
const ListItemDeleteAction = ({ onPress }: Props) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={colors.white}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    display: "flex",
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
})
