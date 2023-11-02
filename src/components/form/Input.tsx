import React, { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, TextInputProps } from 'react-native-paper';
import ErrorText from './ErrorText';
interface InputProps extends TextInputProps {
    name: string
    touched?: boolean
    changeText: (input: string, text: string) => void
    blur: (input: string) => void
    errors?: string
}
const Input: FC<InputProps> = (props) => {
    const { name, placeholder, left, keyboardType, value, theme, changeText, blur, touched, secureTextEntry = false, errors } = props;
    return (
        <>
            <TextInput
                theme={theme}
                left={left}
                value={value}
                onBlur={() => blur(name)}
                keyboardType={keyboardType}
                placeholder={placeholder}
                // placeholderTextColor={COLORS.textInput}
                // activeOutlineColor={COLORS.textInput}
                secureTextEntry={secureTextEntry}
                autoComplete='off'
                style={[styles.textInput, { marginBottom: 15,height : props.multiline ? 60 : 30 }]}
                mode={"outlined"}
                onChangeText={(text: string) => changeText(name, text)}
                {...props}
            />
            <ErrorText error={errors} touched={touched} />
        </>
    )
}
const styles = StyleSheet.create({
    textInput: {
        paddingVertical: 15,
        borderRadius: 64,
        height:  30,
        justifyContent : "center",
    },
})
export default Input;