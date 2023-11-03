import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationProp, ThemeProvider, useNavigation } from '@react-navigation/native';
import ProductList from '../screen/product-list';
import Cart from '../screen/cart';
import Colors from '../constant/Colors';
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';
import { useAppDispatch } from '../hooks/useStore';
import authDataSlice from '../store/slice/authDataSlice';

export type StackNavigationParamsList = {
    ProductList: undefined,
    Cart: undefined,
}
type RootNavigationProps = NavigationProp<StackNavigationParamsList>;
const Stack = createStackNavigator<StackNavigationParamsList>();
const RootNavigation = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<RootNavigationProps>()
    const colorScheme = useColorScheme() ?? "light";
    const handleLogout = () => {
        dispatch(authDataSlice.logout())
    }
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
                            color={Colors[colorScheme].icon}
                            style={styles.cart}
                            onPress={() => navigation.navigate("Cart")}
                        />
                    ),
                    headerLeft : () => (
                        <Ionicons
                            name={"logout"}
                            size={25}
                            color={Colors[colorScheme].icon}
                            style={styles.logout}
                            onPress={() => handleLogout()}
                        />
                    ),
                 
                  }}
                    name={"ProductList"}
                    component={ProductList}
                />

                <Stack.Screen
                    name={"Cart"}
                    options={{
                        title : "Sepet",
                        headerTintColor : Colors[colorScheme].title,
                        headerStyle : {
                            shadowOpacity : 0,
                        },
                        headerLeft : () => (
                            <Ionicons
                                name={"chevron-left"}
                                size={35}
                                color={Colors[colorScheme].icon}
                                style={styles.back}
                                onPress={() => navigation.goBack()}
                            />
                        ),
                    }}
                    
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
  },
  back : {
    marginLeft : 10
  }
});
export default RootNavigation;