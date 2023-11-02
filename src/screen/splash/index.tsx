import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import SessionNavigation from '../../navigation/SessionNavigation';
const Splash = () => {
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        loading ?
            <Loading/>
            :
            <SessionNavigation />

    )
}

export default Splash;