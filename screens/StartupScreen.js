import { ActivityIndicator, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../constants/colors'
import commonStyles from '../constants/commonStyles'
import { useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { authenticate, setDidTryAutoLogin } from '../store/authSlice'
import { getUserData } from '../utils/actions/userActions'

const StartupScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            const storedAuthInfo = await AsyncStorage.getItem("userData");

            if (!storedAuthInfo) {
                dispatch(setDidTryAutoLogin());
                return;
            }
            const parsedData = JSON.parse(storedAuthInfo);
            const { token, userId, expiryDate: expiryDateString } = parsedData;
            const expiryDate = new Date(expiryDateString);
            if (expiryDate <= new Date() || !token || !userId) {
                dispatch(setDidTryAutoLogin());
                return;
            }
            const userData = await getUserData(userId);
            dispatch(authenticate({ token, userData }))

        }
        tryLogin();
    }, [])
    return (
        <View style={commonStyles.center}>
            <ActivityIndicator color={colors.primary} size={'large'} />
        </View>
    )
}

export default StartupScreen