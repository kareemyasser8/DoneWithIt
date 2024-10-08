import { StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import * as Yup from "yup"
import formik from "formik"

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "@/components/forms"
import Screen from "@/components/Screen"
import CategoryPickerItem from "@/components/CategoryPickerItem"
import { ColorKeys } from "@/components/AppButton"
import { MaterialIconName } from "@/components/Icon"
import FormImagePicker from "@/components/forms/FormImagePicker"
import useLocation from "@/hooks/useLocation"
import useAddListing from "@/hooks/useAddListing"
import UploadScreen from "./uploadScreen"
import { AxiosProgressEvent } from "axios"

const schema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
})

export interface CategoryItem {
  label: string
  value: number
  backgroundColor: ColorKeys
  iconName: MaterialIconName
}

const categories: CategoryItem[] = [
  {
    label: "Furniture",
    value: 1,
    backgroundColor: "primary",
    iconName: "lamp",
  },
  {
    label: "Cars",
    value: 2,
    backgroundColor: "orange",
    iconName: "car",
  },
  { label: "Cameras", value: 3, backgroundColor: "yellow", iconName: "camera" },
  { label: "Games", value: 4, backgroundColor: "green", iconName: "cards" },
  {
    label: "Clothing",
    value: 5,
    backgroundColor: "secondary",
    iconName: "shoe-heel",
  },
  {
    label: "Sports",
    value: 6,
    backgroundColor: "lightBlue",
    iconName: "basketball",
  },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "darkBlue",
    iconName: "headset",
  },
  { label: "Books", value: 8, backgroundColor: "purple", iconName: "book" },
  {
    label: "Others",
    value: 9,
    backgroundColor: "dark",
    iconName: "screen-rotation",
  },
]

export interface ListingForm {
  category: any
  description: string
  images: string[]
  price: string
  title: string
  location?: Object
}

const ListingEditingScreen = () => {
  const location = useLocation()
  const { addListing } = useAddListing()

  const [uploadScreenVisible, setUploadScreenVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleUploadProgress = (progressEvent: AxiosProgressEvent) => {
    setProgress(0)
    setUploadScreenVisible(true)
    if (progressEvent.lengthComputable && progressEvent.total) {
      setProgress(Math.round(progressEvent.loaded / progressEvent.total))
      console.log(progress)
    } else {
      console.log(`Upload Progress: Unknown`)
    }
  }

  const handleSubmit = async (
    listing: ListingForm,
    { resetForm }: formik.FormikHelpers<any>
  ) => {
    await addListing({ ...listing, location }, handleUploadProgress)
    resetForm()
  }

  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadScreenVisible(false)}
        progress={progress}
        visible={uploadScreenVisible}
      />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormImagePicker name="images" />

        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          width={120}
          placeholder="Price"
        />

        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={5}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

export default ListingEditingScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
