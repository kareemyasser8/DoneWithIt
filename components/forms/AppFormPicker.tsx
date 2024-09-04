import React from "react"
import AppPicker from "../AppPicker"
import { useFormikContext } from "formik"
import ErrorMessage from "./ErrorMessage"
import { DimensionValue } from "react-native"
import PickerItem from "../PickerItem"

interface Props<T> {
  items: T[]
  name: string
  placeholder: string
  numberOfColumns?: number
  PickerItemComponent?: React.ComponentType<any>
  width?: DimensionValue
}

const AppFormPicker = ({
  items,
  name,
  width = "100%",
  numberOfColumns,
  PickerItemComponent = PickerItem,
  placeholder,
}: Props<any>) => {
  const { errors, setFieldValue, touched, values } = useFormikContext<any>()

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => {
          setFieldValue(name, JSON.stringify(item))
        }}
        placeholder={placeholder}
        selectedItem={JSON.parse(values[name])?.label}
        width={width}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker
