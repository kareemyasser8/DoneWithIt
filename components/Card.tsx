import { View, Text, StyleSheet, Image } from "react-native"
import React from "react"
import colors from "@/app/config/colors"

interface Props {
  title: string
  subTitle: string
  image: any
}

const Card = ({title, subTitle, image}: Props) => {
  return (
    <View style={styles.card}>
        <Image source={image} style={styles.cardImage}/>
        <View style ={styles.detailsContainer}> 
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: "hidden"
    },
    cardImage:{
        width: "100%",
        height: 200,
        objectFit: "cover",
        
    },
    detailsContainer:{
        padding: 20
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    },
    subTitle:{
        fontSize: 20,
        color: colors.secondary
    }
})

export default Card
