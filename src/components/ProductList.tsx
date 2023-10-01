import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../app/hooks'
import ProductItem from './ProductItem';

const ProductList = () => {

    const products = useAppSelector(state => state.products);
    return (
        <View>
            <FlatList data={products} renderItem={((item) => {
                return <ProductItem category={item.item.category} name={item.item.name} price={item.item.price} />
            })} />
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({})