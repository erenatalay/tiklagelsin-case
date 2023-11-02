import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import ProductList from '../screen/product-list';
import Cart from '../screen/cart';
export type StackNavigationParamsList = {
    ProductList: undefined,
    Cart: undefined,
}

const Stack = createStackNavigator<StackNavigationParamsList>();
const RootNavigation = () => {
    const colorScheme = useColorScheme();
    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>

            <Stack.Navigator
            >
                <Stack.Screen
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

export default RootNavigation;