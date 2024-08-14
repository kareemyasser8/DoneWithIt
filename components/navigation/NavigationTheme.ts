import { DefaultTheme, Theme } from "@react-navigation/native"
import colors from "@/app/config/colors"

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      primary: colors.primary,
      background: colors.white,
  },
}

export default navigationTheme
