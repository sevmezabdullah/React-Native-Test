import { StyleSheet, Text, View, Button, Linking } from 'react-native'
import React, { useState } from 'react'

const Home = () => {

    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Text>Hoş Geldiniz</Text>
            <Text>Counter {counter}</Text>

            <Button onPress={() => {
                Linking.openURL("https://www.google.com.tr")
                setCounter(1)
            }} title="Tıkla" />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})