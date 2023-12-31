import React, { FC } from 'react'
import { Text, View } from '../../theme/Theme'
import { Image, StyleSheet, useColorScheme } from 'react-native'
import { Product } from '../../../@types/response/Products'
import Colors from '../../../constant/Colors'
import Button from '../../form/Button/Button'

interface ProductListItemProps {
    item: Product
    onPress?: () => void
}

const ProductListItem: FC<ProductListItemProps> = ({ item ,onPress}) => {
    const color = useColorScheme() ?? "light"
    return (
        <View testID='product-list' style={[styles.container, { backgroundColor: Colors[color].productListItem }]}>
            <View style={[styles.cardContainer, { backgroundColor: Colors[color].productListItem }]}>
                <Image source={{ uri: item.image }} style={[styles.image, { backgroundColor: Colors[color].productListItem }]} />
                <View style={[styles.card, { backgroundColor: Colors[color].productListItem }]}>
                    <Text style={[styles.title, { color: Colors[color].productListItemTitle }]}>{item.name}</Text>
                    <Text style={[styles.description, { color: Colors[color].description }]}>İçindekiler : {item.description}</Text>
                </View>
            </View>

            <Button
                testID='add-cart-button'
                title={`${item.price}TL Sepete Ekle`}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                onPress={onPress}
            />
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
    }
})

export default ProductListItem