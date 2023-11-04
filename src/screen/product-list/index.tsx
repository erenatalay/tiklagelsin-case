import React from 'react'
import { SafeAreaView, Text, View } from '../../components/theme/Theme'
import SearchInput from '../../components/form/Search/SearchInput'
import { FlatList, StyleSheet } from 'react-native'
import { useGetProductsQuery } from '../../store/api/products'
import ProductListItem from '../../components/list/ProductListItem/ProductListItem'
import { Product } from '../../@types/response/Products'
import { useAddCartMutation, useGetCartQuery, useUpdateCartMutation } from '../../store/api/cart'

const ProductList = () => {
    const [searchValue, setSearchValue] = React.useState<string>('')
    const { data } = useGetProductsQuery({ search: searchValue })
    const { data: cart, refetch } = useGetCartQuery()
    const [addCart] = useAddCartMutation()
    const [updateCart] = useUpdateCartMutation()
    const handleAddToCart = (item: Product) => {
        refetch()
        const cartItem = cart?.find(cartItem => cartItem.id === item.id)
        if (cartItem) {
            updateCart({ ...item, quantity: cartItem.quantity += 1 })
            return
        }
        addCart({ ...item, quantity: 1 })
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <SearchInput
                    placeholder={"Arama Yap"}
                    onChangeText={(text) => setSearchValue(text)}
                    value={searchValue}
                />
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                    <ProductListItem
                        onPress={() => handleAddToCart(item)}
                        item={item} />
                )
                }
            />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingVertical: 5,
    }
})
export default ProductList