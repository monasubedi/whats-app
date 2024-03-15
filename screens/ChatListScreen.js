import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

const ChatListScreen = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title='New chat' iconName='create-outline' onPress={() => navigation.navigate("New Chat")} />
                </HeaderButtons>
            }
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text>ChatListScreen</Text>
            <Button onPress={() => navigation.navigate("Chat")} title='Go to chat screen' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default ChatListScreen

