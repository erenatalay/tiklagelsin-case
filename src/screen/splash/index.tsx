import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Loading from './Loading';
import SessionNavigation from '../../navigation/SessionNavigation';
import { useAppSelector } from '../../hooks/useStore';
import RootNavigation from '../../navigation/RootNavigation';
import { useLoginMutation } from '../../store/api/auth';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
const Splash = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const { getItem } = useAsyncStorage('user');
    const [authanticate] = useLoginMutation()
    const { isSignedIn } = useAppSelector(state => state.rootReducer.authReducer)
    const checkAuth = async () => {
        const user = await getItem();
        if (user) {
            const { email, password } = JSON.parse(user);
            authanticate({ email, password });
        }
    }

    useEffect(() => {
        checkAuth();
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        loading ?
            <Loading />
            :
            isSignedIn ?
                <RootNavigation />
                :
                <SessionNavigation />

    )
}

export default Splash;