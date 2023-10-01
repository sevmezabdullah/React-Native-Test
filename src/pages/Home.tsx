import { StyleSheet, Text, View, Button, Linking, FlatList, ActivityIndicator, } from 'react-native'
import React from 'react'
import ProductList from '../components/ProductList'
import AddProductForm from '../components/AddProductForm'


const Home = () => {



    return (
        <View>

            <AddProductForm />
            <ProductList />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})