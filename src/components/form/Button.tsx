import React, { FC } from 'react'
import { ButtonProps, StyleSheet, Text, TouchableOpacity, TextStyle, ViewStyle } from 'react-native'

interface FormButtonProps extends ButtonProps {
    buttonStyle?: ViewStyle
    textStyle?: TextStyle
    icon?: React.ReactNode
    right?: boolean
    left?: boolean
}
const Button: FC<FormButtonProps> = (props) => {
    const { title, buttonStyle, onPress, textStyle, icon, left, right } = props
    return (
        <TouchableOpacity  style={[styles.button, buttonStyle]} onPress={onPress} {...props}>
            {left && icon}
            <Text style={[styles.text, textStyle]}>{title}</Text>
            {right && icon}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 64,
        padding: 5,
        flexDirection : "row",
        alignItems : "center"
    },
    text: {
        textAlign: "center"
    }
})
export default Button