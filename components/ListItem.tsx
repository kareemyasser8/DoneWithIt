import colors from '@/app/config/colors';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

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
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
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
    backgroundColor: colors.white
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 10,
    height: "auto",
  },
  textContainer: {
    display: "flex",
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
