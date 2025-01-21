import axios from "axios";
import { MMKV } from 'react-native-mmkv'

const storage = new MMKV();

const apiInstance = axios.create({
    // baseURL: "http://10.0.2.2:8000/api", // Android Studio
    baseURL: "http://192.168.137.86:8000/api",
});

apiInstance.interceptors.request.use(
    async (config) => {
        try {
            const userData = storage.getString('userData')
            if (userData) {
                const { token } = JSON.parse(userData);
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
            }
        } catch (error) {
            console.error('Error retrieving token from storage', error);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiInstance;