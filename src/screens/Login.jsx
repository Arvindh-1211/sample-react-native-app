import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import { Surface, TextInput, TouchableRipple } from 'react-native-paper'
import authServices from '../services/authServices'
import { useAuth } from '../store/UserContext'

function Login() {
    const navigation = useNavigation()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUserData } = useAuth()

    const handleSubmit = async () => {
        try {
            const data = { username, password }
            const response = await authServices.login(data)
            if (response) {
                setUserData(response)
                navigation.replace('Students')
            }
        } catch (error) {
            console.error("Error logging in: ", error);
        }
    }

    return (
        <View style={styles.screen}>
            <Surface style={styles.container}>
                <Text style={styles.header}>Login</Text>
                <TextInput
                    label="Username"
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />
                <View style={styles.btn_container}>
                    <View style={styles.btn_wrapper}>
                        <TouchableRipple
                            style={styles.button}
                            onPress={handleSubmit}
                            rippleColor="#007bff"
                        >
                            <Text style={styles.btn_label}>Submit</Text>
                        </TouchableRipple>
                    </View>

                </View>
            </Surface>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    container: {
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: 300
    },
    header: {
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 10
    },
    input: {
        height: 40,
        width: 300,
        margin: 10
    },
    btn_container: {
        flex: 0.1,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    btn_wrapper: {
        width: 120,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: '#007bffaa',
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_label: {
        fontSize: 20,
        color: '#ffffff'
    }
})

export default Login
