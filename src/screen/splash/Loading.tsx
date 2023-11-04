import React from 'react'
import {  StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView, Text } from '../../components/theme/Theme'
import Colors from '../../constant/Colors';

const LoadingScreen = () => {
    const color = useColorScheme() ?? "light";
    return (
        <SafeAreaView  style={[styles.container]}>
            <StatusBar hidden={true} />
            <Text style={[styles.logo]}>Tıkla Gelsin</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : Colors.light.red
    },
    logo: {
        fontSize : 35,
        color : "white",
    }

})
export default LoadingScreen;