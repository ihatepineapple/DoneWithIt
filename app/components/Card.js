import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from "../config/colors";
import AppText from "./AppText"


function Card({title, subtitle, image, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress} >
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.subtitle} numberOfLines={2}>{subtitle}</AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    },
})

export default Card;