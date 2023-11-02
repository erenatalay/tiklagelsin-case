import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import Login from '../screen/login';
export type StackNavigationParamsList = {
    Login: undefined,
}

const Stack = createStackNavigator<StackNavigationParamsList>();
const SessionNavigation = () => {
    const colorScheme = useColorScheme();
    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    options={{
                        title: "",
                    }}
                    name={"Login"}
                    component={Login}
                />

            </Stack.Navigator>
        </ThemeProvider>
    );
}

export default SessionNavigation;