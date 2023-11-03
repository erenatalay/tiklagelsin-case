import React, { useCallback } from 'react'
import { SafeAreaView } from '../../components/theme/Theme'
import { useDeleteCartMutation, useGetCartQuery, useUpdateCartMutation } from '../../store/api/cart'
import { FlatList, StyleSheet } from 'react-native'
import CardListItem from '../../components/list/CartListItem'
import Button from '../../components/form/Button'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore'
import { Cart as CartData } from '../../@types/response/Cart'
import mainDataSlice from '../../store/slice/mainDataSlice'

const Cart = () => {
  const { total } = useAppSelector(state => state.rootReducer.cartReducer)
  const { data ,refetch} = useGetCartQuery()
  const dispatch = useAppDispatch();
  const [updateCart] = useUpdateCartMutation()
  const [deleteCart] = useDeleteCartMutation()
  const handleIncrement = (item: CartData) => {
    updateCart({ ...item, quantity: item.quantity += 1 })
  }
  const handleDecrement = (item: CartData) => {
    if (item.quantity === 1) {
      deleteCart(item)
      return
    }
    updateCart({ ...item, quantity: item.quantity -= 1 })
  }

  const handleBuy = async () => {
    await Promise.all([data?.map(item => deleteCart(item))])
    refetch()
    dispatch(mainDataSlice.success("Satın alma işlemi başarılı"))

  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardListItem
            increment={() => handleIncrement(item)}
            decrement={() => handleDecrement(item)}
            item={item} />
        )}
      />

      <Button
        buttonStyle={styles.button}
        textStyle={styles.textButton}
        title={`${total} TL Satın Al`}
        onPress={() => handleBuy()}
      />

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 15
  },
  textButton: {
    fontWeight: "500",
    fontSize: 16,
  },
})
export default Cart