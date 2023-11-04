import React, { FC } from "react"
import { HelperText } from "react-native-paper"
import { Text } from "react-native"

interface PropsHelperText {
    touched: boolean | undefined
    error: string | undefined
}
const ErrorText : FC<PropsHelperText> = (props) => {
    const {error,touched} = props;
    const visible = !!(error &&touched)
    return (
        <>
            {visible &&
            <HelperText type="error"
                visible={visible}>
                <Text testID="error-text">{props.error}</Text>
            </HelperText>
            }
        </>
    )
}
export default ErrorText