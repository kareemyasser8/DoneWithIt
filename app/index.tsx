import Screen from "@/components/Screen"
import { useNetInfo } from "@react-native-community/netinfo"
import { Link } from "expo-router"
import React from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

const index = () => {

  // const netinfo = useNetInfo();
  // console.log(JSON.stringify(netinfo, null, 2))

  return (
    <Screen>
      <Link href={"(tabs)"} asChild>
        <Pressable
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Go to home</Text>
        </Pressable>
      </Link>
    </Screen>
  )
}

export default index

const styles = StyleSheet.create({})
