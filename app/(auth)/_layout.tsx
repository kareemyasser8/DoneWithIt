import { Stack } from "expo-router"

const AuthLayout = () => (
  <Stack>
    <Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack.Screen name="register" />
    <Stack.Screen name="login" />
  </Stack>
)

export default AuthLayout
