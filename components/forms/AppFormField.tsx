import {
  DimensionValue,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from "react-native"
import React from "react"
import { useFormikContext } from "formik"

import AppTextInput from "../AppTextInput"
import ErrorMessage from "./ErrorMessage"
import { MaterialIconName } from "../Icon"

interface Props extends TextInputProps {
  name: string
  width?: DimensionValue
  icon?: MaterialIconName
}

const AppFormField = ({ name, width, icon, ...rest }: Props) => {
  const { setFieldTouched, setFieldValue, values, errors, touched } =
    useFormikContext<any>()

  return (
    <>
      <AppTextInput
        icon={icon}
        {...rest}
        width={width}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
      />
      {<ErrorMessage visibile={touched[name]} error={errors[name]} />}
    </>
  )
}

export default AppFormField

const styles = StyleSheet.create({})
