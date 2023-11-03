import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import ProductList from '../screen/product-list';
import Cart from '../screen/cart';
import Colors from '../constant/Colors';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';

export type StackNavigationParamsList = {
    ProductList: undefined,
    Cart: undefined,
}

const Stack = createStackNavigator<StackNavigationParamsList>();
const RootNavigation = () => {
    const colorScheme = useColorScheme() ?? "light";
    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>

            <Stack.Navigator
            >
                <Stack.Screen
                  options={{
                    title : "Ürün Listesi",
                    headerTintColor : Colors[colorScheme].title,
                    headerStyle : {
                        shadowOpacity : 0
                    },
                    headerRight : () => (
                        <Ionicons
                            name={"cart"}
                            size={25}
                            color={Colors[colorScheme].title}
                            style={styles.cart}
                        />
                    ),
                    headerLeft : () => (
                        <Ionicons
                            name={"logout"}
                            size={25}
                            color={Colors[colorScheme].title}
                            style={styles.logout}
                        />
                    ),
                 
                  }}
                    name={"ProductList"}
                    component={ProductList}
                />

                <Stack.Screen
                    name={"Cart"}
                    component={Cart}
                />

            </Stack.Navigator>
        </ThemeProvider>
    );
}
const styles = StyleSheet.create({
  cart : {
    marginRight : 10
  },
  logout : {
    marginLeft : 10
  }
});
export default RootNavigation;