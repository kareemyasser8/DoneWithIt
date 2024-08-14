import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
import Screen from "@/components/Screen"
import { AppForm, AppFormField, SubmitButton } from "@/components/forms"
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("hello")}
      >
        <AppFormField
          name="name"
          autoCorrect={false}
          placeholder="Name"
          textContentType="name"
          icon="account"
        />

        <AppFormField
          placeholder="Email"
          icon="email"
          name="email"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
        />

        <AppFormField
          autoCapitalize="none"
          name="password"
          autoCorrect={false}
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          icon="lock"
        />

        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
})
