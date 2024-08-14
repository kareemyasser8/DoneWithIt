import { View, Text } from "react-native"
import { Stack } from "expo-router"
import React from "react"

const ListingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen options={{headerShown: false}} name="listing" />
      <Stack.Screen options={{headerShown: false}} name="[listDetails]" />
    </Stack>
  )
}

export default ListingsLayout
