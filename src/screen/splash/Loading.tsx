import React from 'react'
import {  StatusBar, StyleSheet } from 'react-native'
import { SafeAreaView, Text } from '../../components/theme/Theme'

const LoadingScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <Text style={styles.logo}>Tıkla Gelsin</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo: {
        fontSize : 35,
    }

})
export default LoadingScreen;