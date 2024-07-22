import { View, StyleSheet, Text } from "react-native"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Hello React Kareem</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
