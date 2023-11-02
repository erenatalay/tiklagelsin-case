import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'

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
        color : "white"
    }

})
export default LoadingScreen;