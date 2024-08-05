import defaultStyles from '@/app/config/styles';
import { ReactNode } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
interface Props extends TextProps {
  children: ReactNode
  style?: any
}

const AppText = ({ children, style, ...rest}: Props) => {
  return <Text style={[defaultStyles.text, style]} {...rest}>{children}</Text>
}

export default AppText

const styles = StyleSheet.create({})
