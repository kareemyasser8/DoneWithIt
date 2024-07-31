import AppPicker from "@/components/AppPicker"
import AppTextInput from "@/components/AppTextInput"
import Screen from "@/components/Screen"
import { useState } from "react"
import ListingScreen from "./listing"
import AccountScreen from "./account"

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
]

export default function HomeScreen() {
  const [category, setCategory] = useState()

  return (
    <>
      {/* <AppPicker
      selectedItem={category}
      onSelectItem={(item) => setCategory(item)}
      items={categories}
      placeholder="Category"
      icon="apps"
      />
      <AppTextInput placeholder="Email" icon="email" /> */}

      <AccountScreen />
    </>
  )
}
