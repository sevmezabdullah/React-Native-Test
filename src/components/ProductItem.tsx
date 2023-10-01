import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Product } from '../redux/reducer/products'

const ProductItem = (product: Product) => {
    return (
        <View>
            <Text>{product.name}</Text>
            <Text>{product.category}</Text>
            <Text>{product.price}</Text>
        </View>
    )
}

export default ProductItem

const styles = StyleSheet.create({})