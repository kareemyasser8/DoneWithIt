import AppButton from "@/components/AppButton"
import { router } from "expo-router"
import React from "react"
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native"

const WelcomeScreen = () => {
  const navigateToRegisterPage = () => {
    router.navigate("/register")
  }

  const navigateToLoginPage = () => {
    router.navigate("/login")
  }

  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require("@/assets/images/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("@/assets/images/logo-red.png")}
        />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={navigateToLoginPage} />
        <AppButton
          title="register"
          color={"secondary"}
          onPress={navigateToRegisterPage}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    gap: 10,
    marginBottom: 30,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
    gap: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "bold",
  },
})

export default WelcomeScreen
