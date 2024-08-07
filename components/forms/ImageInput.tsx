import { Alert, Image, StyleSheet, View } from "react-native"
import React, { useEffect, useState } from "react"
import { TouchableWithoutFeedback } from "react-native"
import colors from "@/app/config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker"

interface Props {
  imageUri: any
  onChangeImage: (imageUri: any) => void
}

const ImageInput = ({ imageUri, onChangeImage }: Props) => {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) alert("You need to enable permission to access the library.")
  }

  useEffect(()=>{
    requestPermission();
  },[])

  const handlePress = () => {
    if (!imageUri) selectImage()
    else
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        {
          text: "Yes",
          onPress: () => {
            onChangeImage(null)
          },
        },
        {
          text: "No",
        },
      ])
  }

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      })
      if (!result.canceled) onChangeImage(result.assets[0].uri)
    } catch (error) {
      console.log("Error reading an image: ", error)
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          {!imageUri && (
            <MaterialCommunityIcons
              style={styles.icon}
              size={40}
              name={"camera"}
            />
          )}

          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.image} />
          )}
        </View>
      </TouchableWithoutFeedback>
    </>
  )
}

export default ImageInput

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  icon: {
    color: colors.medium,
  },
  image: {
    width: "100%",
    height: "100%",
  },
})
