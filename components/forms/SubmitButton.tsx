import { useFormikContext } from "formik"
import React from "react"
import { StyleSheet, View } from "react-native"

import AppButton from "../AppButton"

interface Props {
  title: string
}

const SubmitButton = ({ title }: Props) => {
  const { handleSubmit } = useFormikContext()

  return (
    <View style={styles.container}>
      <AppButton title={title} onPress={handleSubmit} />
    </View>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
})
