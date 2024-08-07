import React from "react"
import { useFormikContext } from "formik"

import ErrorMessage from "./ErrorMessage"
import ImageInputList from "./ImageInputList"
import { ImagePickerAsset } from "expo-image-picker"

const FormImagePicker = ({ name }: { name: string }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<any>()

  const imageUris = values[name]

  const handleAdd = (uri: ImagePickerAsset) => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = (uri: ImagePickerAsset) => {
    setFieldValue(
      name,
      imageUris.filter((imgUri: any) => uri !== imgUri)
    )
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
       <ErrorMessage error={errors[name]} visibile={touched[name]} />
    </>
  )
}

export default FormImagePicker
