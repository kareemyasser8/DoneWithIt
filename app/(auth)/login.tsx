import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "@/components/forms"
import routes from "@/components/navigation/routes"
import Screen from "@/components/Screen"
import useAuth from "@/auth/useAuth"
import { useRouter } from "expo-router"
import React, { useState } from "react"
import { Image, StyleSheet } from "react-native"
import * as Yup from "yup"
import ActivityIndicator from "@/components/ActivityIndicator"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = () => {
  const { onLogin } = useAuth()
  const [loginFailed, setLoginFailed] = useState(false)
  const [isloading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async ({ email, password }: any) => {
    setIsLoading(true)
    setLoginFailed(false)
    try {
      const res = await onLogin(email, password)
      if (!res) return setLoginFailed(true)
      router.navigate(routes.tabs);
    } catch (error) {
      setLoginFailed(true)
      console.log(error)
    }finally{
      setIsLoading(false);
    }
  }

  if (isloading) {
    return <ActivityIndicator visible={isloading} />
  }

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
        onSubmit={handleSubmit}
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
        <ErrorMessage
          visible={loginFailed}
          error={"Invalid email and/or password."}
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
