import { StyleSheet } from "react-native"
import React from "react"
import AppText from "../AppText"
import colors from "@/app/config/colors"
import { FormikTouched } from "formik"

interface Props {
  error: any
  visibile: boolean | FormikTouched<any> | FormikTouched<any>[] | undefined
}

const ErrorMessage = ({ error, visibile }: Props) => {
  if (!visibile || !error) return null

  return <AppText style={styles.error}>{error}</AppText>
}

export default ErrorMessage

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
})
