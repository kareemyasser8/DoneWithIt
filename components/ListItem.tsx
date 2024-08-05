import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native"

import AppText from "./AppText"
import colors from "@/app/config/colors"

interface Props {
  title: string
  subTitle?: string
  image?: ImageSourcePropType
  IconComponent?: React.JSX.Element
  onPress?: () => void
}

const ListItem = ({
  image,
  subTitle,
  IconComponent,
  title,
  onPress,
}: Props) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText numberOfLines={1}  style={styles.title}>{title}</AppText>
            {subTitle && <AppText numberOfLines={3} style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
        <MaterialCommunityIcons color={colors.medium} style={{marginRight: 5}} name="chevron-right" size={25}/>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    height: "auto",
  },
  textContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 5,
    marginLeft: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 18,
    color: colors.medium,
  },
})

export default ListItem
