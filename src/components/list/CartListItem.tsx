import React, { FC } from 'react'
import { Text, View } from '../theme/Theme'
import { Image, StyleSheet, useColorScheme } from 'react-native'
import Colors from '../../constant/Colors'
import IconButton from '../form/IconButton'
import { Cart } from '../../@types/response/Cart'

interface ProductListItemProps {
    item: Cart
}

const CardListItem: FC<ProductListItemProps> = ({ item }) => {
    const color = useColorScheme() ?? "light"
    return (
        <View style={[styles.container, { backgroundColor: Colors[color].productListItem }]}>
            <View style={[styles.cardContainer, { backgroundColor: Colors[color].productListItem }]}>
                <Image source={{ uri: item.image }} style={[styles.image, { backgroundColor: Colors[color].productListItem }]} />
                <View style={[styles.card, { backgroundColor: Colors[color].productListItem }]}>
                    <Text style={[styles.title, { color: Colors[color].productListItemTitle }]}>{item.name}</Text>
                    <Text style={[styles.description, { color: Colors[color].description }]}>İçindekiler : {item.description}</Text>
                </View>
            </View>
            <View style={[styles.action,{ backgroundColor: Colors[color].productListItem }]}>
                <IconButton
                    name={"plus"}
                    size={20}
                    color={"black"}
                    onPress={() => { }}
                    style={styles.plus}
                />
                <Text style={styles.quantity}>{item.quantity} Adet</Text>
                <IconButton
                    name={"minus"}
                    size={20}
                    color={"black"}
                    onPress={() => { }}
                    style={styles.minus}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5,
        padding: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    card: {
        flexDirection: "column",
        marginHorizontal: 10,
    },
    description: {
        color: "white",
        width: 150,
        fontSize: 13
    },
    title: {
        color: "white",
        fontSize: 15,
        fontWeight: "600",
        marginVertical: 5
    },
    button: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
    },
    buttonText: {
        color: "black",
        fontSize: 12,
        fontWeight: "600",
    },
    action: {
        flexDirection: "row",
        alignItems: "center",
    },
    quantity: {
        color: "white",
        fontSize: 15,
        marginHorizontal: 10
    },
    plus : {
        backgroundColor : "white",
        borderWidth : 1,
        borderColor : "gray",
    },
    minus : {
        backgroundColor : "white",
        borderWidth : 1,
        borderColor : "gray",
    }
})

export default CardListItem