import colors from '@/app/config/colors';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import AppText from './AppText';

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
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: "hidden",
        marginVertical: 10
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
