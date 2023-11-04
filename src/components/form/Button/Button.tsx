import React, { FC } from 'react'
import { ButtonProps, StyleSheet, Text, TouchableOpacity, TextStyle, ViewStyle, useColorScheme } from 'react-native'
import Colors from '../../../constant/Colors'

interface FormButtonProps extends ButtonProps {
    buttonStyle?: ViewStyle
    textStyle?: TextStyle
    icon?: React.ReactNode
    right?: boolean
    left?: boolean
}
const Button: FC<FormButtonProps> = (props) => {
    const { title, buttonStyle, onPress, textStyle, icon, left, right } = props
    const color = useColorScheme() ?? 'light';

    return (
        <TouchableOpacity testID='button-pressable' style={[styles.button, { backgroundColor: Colors[color].buttonBackground }, buttonStyle]} onPress={onPress} {...props}>
            {left && icon}
            <Text testID='button-text' style={[styles.text, { color: Colors[color].buttonTextColor }, textStyle]}>{title}</Text>
            {right && icon}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 64,
        padding: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        textAlign: "center"
    }
})
export default Button