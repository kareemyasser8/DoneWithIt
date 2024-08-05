import colors from "@/app/config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import React, { useState } from "react"
import {
  Button,
  DimensionValue,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native"

import { MaterialIconName } from "./Icon"
import PickerItem from "./PickerItem"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import AppText from "./AppText"

interface Props {
  icon?: MaterialIconName
  items: any[]
  width?: DimensionValue
  selectedItem: string
  onSelectItem: (item: any) => void
  placeholder: string
}

const AppPicker = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  width = "100%",
}: Props) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <GestureHandlerRootView>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  onSelectItem(item.label)
                  setModalVisible(false)
                }}
              />
            )}
          />
        </GestureHandlerRootView>
      </Modal>
    </>
  )
}

export default AppPicker

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
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
})
