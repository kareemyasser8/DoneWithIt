import LottieView from "lottie-react-native"
import React from "react"
import { View, StyleSheet } from "react-native"

const ActivityIndicator = ({ visible = false }: { visible: boolean }) => {
  if (!visible) return null

  return (
    <View style={styles.animationContianer}>
      <LottieView
        autoPlay
        loop
        style={{
          width: 200,
          height: 200,
        }}
        source={require("@/assets/animations/loading.json")}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  animationContianer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
})

export default ActivityIndicator
