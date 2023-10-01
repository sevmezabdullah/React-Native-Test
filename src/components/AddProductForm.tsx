import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { add } from '../redux/reducer/products'

const AddProductForm = () => {

    const dispatch = useAppDispatch()

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")


    const nameHandler = (text: string) => {
        setName(text)
    }
    const priceHandler = (text: string) => {
        setPrice(text)
    }
    const categoryHandler = (text: string) => {
        setCategory(text)
    }


    const addProduct = () => {
        dispatch(add({ name, category, price: Number(price) }))
    }
    return (
        <View>
            <TextInput onChangeText={nameHandler} placeholder='Ad' />
            <TextInput onChangeText={priceHandler} placeholder='Fiyat' />
            <TextInput onChangeText={categoryHandler} placeholder='Kategori' />
            <Button onPress={addProduct} title='Kaydet' />
        </View>
    )
}

export default AddProductForm

const styles = StyleSheet.create({})