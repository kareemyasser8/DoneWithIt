import { StyleSheet } from "react-native"
import React, { useState } from "react"
import Screen from "@/components/Screen"
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "@/components/forms"
import * as Yup from "yup"
import useAuth from "@/auth/useAuth"
import { router } from "expo-router"
import routes from "@/components/navigation/routes"
import ActivityIndicator from "@/components/ActivityIndicator"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

const RegisterScreen = () => {
  const [registerationFailed, setRegisterationFailed] = useState(false)
  const [errorMessage, setErrorMessage] = useState<any>("")
  const { onRegister, onLogin } = useAuth()
  const [isloading, setIsLoading] = useState(false)

  const handleSubmit = async (values: any) => {
    setIsLoading(true)
    setRegisterationFailed(false)
    try {
      await onRegister(values)
      await onLogin(values.email, values.password)
      router.navigate(routes.tabs)
    } catch (error: any) {
      setRegisterationFailed(true)
      setErrorMessage(
        error instanceof Error
          ? error.message.substring(7)
          : "un expected error happened"
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (isloading) {
    return <ActivityIndicator visible={isloading} />
  }

  return (
    <Screen style={styles.container}>
      <ErrorMessage visible={registerationFailed} error={errorMessage} />
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
