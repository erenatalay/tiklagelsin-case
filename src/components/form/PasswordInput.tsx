import React, { FC } from 'react'
import { StyleSheet, View, useColorScheme } from 'react-native'
import { TextInput, TextInputProps, DefaultTheme } from 'react-native-paper';
import ErrorText from './ErrorText';
import Colors from '../../constant/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

interface InputProps extends TextInputProps {
    name: string
    touched?: boolean
    changeText: (input: string, text: string) => void
    blur: (input: string) => void
    errors?: string
}
const PasswordInput: FC<InputProps> = (props) => {
    const [isSecureTextEntry, setSecureTextEntry] = React.useState<boolean>(true);
    const { name, placeholder, left, keyboardType, value, changeText, blur, touched, secureTextEntry = false, errors } = props;
    const color = useColorScheme() ?? 'light';
    const theme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: "white",
            text: "blue",
        },
        ...{ roundness: 30 },

    };
    return (
        <View style={styles.container}>
            <TextInput
                theme={theme}
                left={left}
                value={value}
                onBlur={() => blur(name)}
                keyboardType={keyboardType}
                placeholder={placeholder}
                placeholderTextColor={Colors[color].textInputPlaceholder}
                activeOutlineColor={Colors[color].textInputBackground}
                autoComplete='off'
                secureTextEntry={isSecureTextEntry}
                style={[styles.textInput, { height: props.multiline ? 60 : 30 }]}
                mode={"outlined"}
                right={<TextInput.Icon
                    onPress={() => setSecureTextEntry(!isSecureTextEntry) }
                    icon={isSecureTextEntry ? "eye" : "eye-off"} />
                }
                onChangeText={(text: string) => changeText(name, text)}
                {...props}
            />
            <ErrorText error={errors} touched={touched} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    textInput: {
        paddingVertical: 15,
        borderRadius: 64,
        height: 30,
        justifyContent: "center",
    },
})
export default PasswordInput;