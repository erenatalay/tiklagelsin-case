import React from 'react'
import { SafeAreaView } from '../../components/theme/Theme'
import { useGetCartQuery } from '../../store/api/cart'
import { FlatList, StyleSheet } from 'react-native'
import CardListItem from '../../components/list/CartListItem'
import Button from '../../components/form/Button'

const Cart = () => {
  const { data } = useGetCartQuery()
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardListItem item={item} />
        )}

      />

      <Button
        buttonStyle={styles.button}
        textStyle={styles.textButton}
        title={"Satın Al"}
        onPress={() => null}
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