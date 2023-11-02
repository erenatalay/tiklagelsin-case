import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import SessionNavigation from '../../navigation/SessionNavigation';
import { useAppSelector } from '../../hooks/useStore';
import RootNavigation from '../../navigation/RootNavigation';
const Splash = () => {
    const [loading, setLoading] = useState<boolean>(true)
    const { isSignedIn } = useAppSelector(state => state.rootReducer.authReducer)
    useEffect(() => {
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