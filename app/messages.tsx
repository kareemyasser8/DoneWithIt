import ListItem from "@/components/ListItem"
import ListItemDeleteAction from "@/components/ListItemDeleteAction"
import ListItemSeparator from "@/components/ListItemSeparator"
import Screen from "@/components/Screen"
import React, { useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import { Swipeable } from "react-native-gesture-handler"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const MessagesScreen = () => {
  const [messages, setMessages] = useState<any[]>([
    {
      id: 1,
      title: "T1",
      description: "D1",
      image: require("@/assets/images/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "D2",
      image: require("@/assets/images/mosh.jpg"),
    },
    {
      id: 3,
      title: "T3",
      description: "D3",
      image: require("@/assets/images/mosh.jpg"),
    },
  ])

  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = (message: any) => {
    setMessages(messages.filter((m) => m.id !== message.id))
  }

  const handleRightAction = (item: any) => {
    return <ListItemDeleteAction onPress={() => handleDelete(item)} />
  }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <GestureHandlerRootView>
            <Swipeable renderRightActions={() => handleRightAction(item)}>
              <ListItem
                title={item.title}
                image={item.image}
                subTitle={item.description}
                onPress={() => console.log("Message selected: ", item.title)}
              />
            </Swipeable>
          </GestureHandlerRootView>
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "T2",
              description: "D2",
              image: require("@/assets/images/mosh.jpg"),
            },
            {
              id: 3,
              title: "T2",
              description: "D2",
              image: require("@/assets/images/mosh.jpg"),
            },
          ])
        }}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({})

export default MessagesScreen
