import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';

interface IconButtonProps extends TouchableOpacityProps {
    name: React.ComponentProps<typeof Ionicons>["name"];
    size: number;
    color: string;
}
const IconButton: FC<IconButtonProps> = (props) => {
    const { size, color, name } = props
    return (
        <TouchableOpacity testID='button-icon' {...props}>
            <Ionicons size={size} color={color} name={name} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

})

export default IconButton