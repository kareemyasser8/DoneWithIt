import Screen from '@/components/Screen';
import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const index = () => {
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
