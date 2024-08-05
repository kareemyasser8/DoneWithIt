import React from "react"
import { Image, StyleSheet } from "react-native"
import * as Yup from "yup"

import Screen from "@/components/Screen"
import {
  AppForm,
  AppFormField,
  SubmitButton,
} from "@/components/forms"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        source={require("@/assets/images/logo-red.png")}
        style={styles.logo}
      />
      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("hello")}
      >
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

        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  )
}

export default LoginScreen

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
