import { StyleSheet, Text, View, Image, ScrollView } from "react-native"
import React, { useRef } from "react"
import { ImagePickerAsset } from "expo-image-picker"
import ImageInput from "./ImageInput"

interface Props {
  imageUris: ImagePickerAsset[]
  onRemoveImage: (uri: ImagePickerAsset) => void
  onAddImage: (uri: ImagePickerAsset) => void
}

const ImageInputList = ({
  imageUris = [],
  onRemoveImage,
  onAddImage,
}: Props) => {
  const scrollView = useRef<ScrollView>(null)

  return (

    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.map((uri, index) => (
            <View key={index} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} imageUri={null} />
        </View>
      </ScrollView>
    </View>
  )
}

export default ImageInputList

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
})
