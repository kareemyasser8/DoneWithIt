import { StyleSheet, Text, View } from "react-native"
import React from "react"
import * as Yup from "yup"

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "@/components/forms"
import Screen from "@/components/Screen"

const schema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
})

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
]

type FormData = Yup.InferType<typeof schema>

const ListingEditingScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={schema}
      >
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
