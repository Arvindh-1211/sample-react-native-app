import React, { createContext, useState, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Snackbar } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
    const [error, setError] = useState('')

    const clearError = () => {
         setError(null)
    };

    const handleSnackbarClose = () => {
        clearError()
    };

    // useEffect(() => {
    //     const getError = async () => {
    //         const data = await AsyncStorage.getItem('error')
    //         if (data) {
    //             setError(data)
    //         }
    //     }
    //     getError()
    // }, [])

    // useEffect(() => {
    //     const updateError = async () => {
    //         if (error) {
    //             await AsyncStorage.setItem('error', JSON.stringify(error));
    //         } else {
    //             await AsyncStorage.setItem('error', '');
    //         }
    //     }
    //     updateError()
    // }, [error]);

    return (
        <ErrorContext.Provider value={{ error, setError, clearError }}>
            {children}
            {error && (
                <View>
                    <Snackbar
                        visible={error !== '' ? true : false}
                        onDismiss={handleSnackbarClose}
                        onIconPress={handleSnackbarClose}
                    >
                        {error}
                    </Snackbar>
                </View>
            )}
        </ErrorContext.Provider>
    );
};

export const useError = () => useContext(ErrorContext);