import React from 'react'
import { SafeAreaView, Text, View } from '../../components/theme/Theme'
import SearchInput from '../../components/form/SearchInput'
import { FlatList, StyleSheet } from 'react-native'
import { useGetProductsQuery } from '../../store/api/products'
import ProductListItem from '../../components/list/ProductListItem'

const ProductList = () => {
    const { data } = useGetProductsQuery()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <SearchInput
                    placeholder={"Arama Yap"}
                    value=''
                />
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => (
                   <ProductListItem item={item}/>
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