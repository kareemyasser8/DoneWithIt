import defaultStyles from '@/app/config/styles';
import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  children: ReactNode
  style?: any
}

const AppText = ({ children, style }: Props) => {
  return <Text style={[defaultStyles.text, style]}>{children}</Text>
}

export default AppText

const styles = StyleSheet.create({})
