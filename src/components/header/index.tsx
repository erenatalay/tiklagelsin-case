import React, { FC } from 'react'
import { Text, View } from '../theme/Theme'
import Colors from '../../constant/Colors'
import { StyleSheet } from 'react-native'

interface HeaderProps {
    title: string
}
const Header :FC<HeaderProps> = ({title}) => {
    return (
        <View
            lightColor={Colors.light.red}
            darkColor={Colors.dark.red}
            style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        padding: 50,
    },
    title: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 30,
        marginTop: 60
    },
})

export default Header