import { StyleSheet } from "react-native"
import React from "react"
import AppText from "../AppText"
import colors from "@/app/config/colors"
import { FormikTouched } from "formik"

interface Props {
  error: any
  visible: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined
}

const ErrorMessage = ({ error, visible }: Props) => {
  if (!visible || !error) return null

  return <AppText style={styles.error}>{error}</AppText>
}

export default ErrorMessage

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
})
