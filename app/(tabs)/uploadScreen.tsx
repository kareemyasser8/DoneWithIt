import React from "react"
import { Modal, StyleSheet, View } from "react-native"
import * as Progress from "react-native-progress"
import colors from "../config/colors"
import LottieView from "lottie-react-native"

interface Props {
  progress: number
  visible: boolean
  onDone: () => void
}

const UploadScreen = ({ progress = 0, visible = false, onDone }: Props) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            color={colors.primary}
            progress={progress}
            width={200}
          />
        ) : (
          <LottieView
            onAnimationFinish={onDone}
            autoPlay
            loop={false}
            source={require("@/assets/animations/done.json")}
            style={styles.animaton}
          />
        )}
      </View>
    </Modal>
  )
}

export default UploadScreen

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  animaton: {
    width: 150,
    flex: 1,
  },
})
