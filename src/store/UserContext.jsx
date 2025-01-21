import React, { createContext, useState, useEffect, useContext } from 'react';
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV();

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState();
    // userData => { token, exp, user_id, username, role }

    useEffect(() => {
        const getUserData = async () => {
            const data = storage.getString('userData')
            if (data) {
                setUserData(JSON.parse(data))
            }
        }
        getUserData()
        // clearUserData()
    }, [])

    useEffect(() => {
        const updateUserData = async () => {
            if (userData) {
                storage.set('userData', JSON.stringify(userData))
            } else {
                storage.set('userData', '')
            }
        }

        updateUserData()
    }, [userData]);

    const clearUserData = () => {
        setUserData('')
    }

    return (
        <UserContext.Provider value={{ userData, setUserData, clearUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);