import React, { FC, useEffect, useRef } from 'react';
import {
    Animated,
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppDispatch, useAppSelector } from '../../../hooks/useStore';
import mainDataSlice from '../../../store/slice/mainDataSlice';
export interface ToastProps {
    icon?: React.ReactNode;
    text: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
    theme?: 'success' | 'danger' | 'primary';
}

export interface ToastOptions extends ToastProps {
    text: string;
    duration?: number;
}
const GlobalToast: FC = ({ children }: any) => {
    const { error, message, toast } = useAppSelector(state => state.rootReducer.mainReducer)
    const dispatch = useAppDispatch();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: toast ? 1 : 0,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [toast]);

    useEffect(() => {
        setTimeout(() => {
            dispatch(mainDataSlice.clear())
        },3000)

    },[toast])

    return (
        <View testID='global-toast'>
            {toast ? (
                <SafeAreaView
                    pointerEvents="none"
                    style={[
                        styles.globalToast,
                        styles.bottomMiddle,
                    ]}>
                    <Animated.View style={{ opacity: fadeAnim }}>
                        <Toast
                            text={message}
                            theme={error ? 'danger' : 'success'}
                        />
                    </Animated.View>
                </SafeAreaView>
            ) : null}
            {children}
        </View>
    );
};

const Toast: FC<ToastProps> = ({ text, onPress, style, theme }) => {
    return (
        <View style={[styles.toast, styles[`toast$${theme || 'primary'}`], style]}>

            <Text style={styles.toastText}>{text}</Text>
            {!!onPress && (
                <TouchableHighlight onPress={onPress} underlayColor="none">
                    <Text style={[styles.toastButton]}>Buraya dokun</Text>
                </TouchableHighlight>
            )}
        </View>
    );
};



const styles = StyleSheet.create({
    globalToast: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 100,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 20,
        paddingBottom: 30,
    },

    bottomMiddle: {
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    toastIcon: {
        fontSize: 18,
        marginTop: -2,
        color: '#ffffff',
    },
    toastText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    toastButton: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 10,
        position: 'relative',
        right: 10,
        fontSize: 15,
    },
    toast: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    toast$success: {
        backgroundColor: "green",
    },
    toast$danger: {
        backgroundColor: "red",
    },
    toast$primary: {
        backgroundColor: "white",
    },
});

export default GlobalToast;
