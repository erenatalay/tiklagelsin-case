import React, { FC } from 'react'
import { StyleSheet, useColorScheme } from 'react-native';
import { Searchbar, SearchbarProps, DefaultTheme, TextInput, TextInputProps } from 'react-native-paper'
import Colors from '../../constant/Colors';

interface SearchInputProps extends TextInputProps {

}

const SearchInput: FC<SearchInputProps> = (props) => {
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
        <TextInput
            theme={theme}
            left={<TextInput.Icon icon={"magnify"} />}
            style={styles.textInput}
            placeholderTextColor={Colors[color].textInputPlaceholder}
            activeOutlineColor={Colors[color].textInputBackground}
            mode={"outlined"}
            {...props}
        />
    )
}

const styles = StyleSheet.create({
 textInput : {
        paddingVertical: 12,
        borderRadius: 64,
        height: 20,
        justifyContent: "center",
        marginHorizontal : 15
 }
})

export default SearchInput