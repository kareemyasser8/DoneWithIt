import colors from "@/app/config/colors"
import MaterialCommunityIcons from "@expo/vector-icons/build/MaterialCommunityIcons"

import { MaterialIconName } from "./Icon"

interface Props {
  focused: boolean
  color?: string
  size?: number
  name?: MaterialIconName
}

const TabIcon = ({ focused, color, size = 30, name = "home" }: Props) => {
  return (
    <MaterialCommunityIcons
      name={name}
      color={focused ? colors.primary : colors.light}
      size={size}
    />
  )
}

export default TabIcon
