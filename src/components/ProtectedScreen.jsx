import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../store/UserContext';
import { useError } from '../store/ErrorContext';

function ProtectedScreen({ children, users }) {
    const navigation = useNavigation()

    const { userData } = useAuth()
    const { setError } = useError()

    useEffect(() => {
        const isValid = (userData) => {
            const tokenValidity = new Date(userData.exp * 1000) // * 1000 to convert into milliseconds
            const now = new Date()
            return tokenValidity >= now
        }

        const getUserDetails = async () => {
            // Waiting for userData to be fetched from local storage
            if (userData === undefined) {
                return;
            }

            if (userData && isValid(userData)) {
                if (!(users ? users.includes(userData.role) : true)) {
                    setError('Unauthorized User')
                    navigation.goBack()
                }
            } else {
                navigation.navigate('Login')
            }
        }
        getUserDetails()
    }, [userData, children, users, navigation])

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedScreen