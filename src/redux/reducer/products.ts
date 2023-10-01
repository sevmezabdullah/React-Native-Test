import { createSlice, PayloadAction } from "@reduxjs/toolkit";



export type Product = {
    id?: number,
    name: string | null,
    price: number | 0,
    category: string | null,

}
const initialState: Product[] = []

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add(state, action: PayloadAction<Product>) {
            const newProduct: Product = {
                id: state.length + 1,
                name: action.payload.name,
                price: action.payload.price,
                category: action.payload.category,
            }
            state.push(newProduct)
        },
        update(state, action: PayloadAction<{ id: number, product: Product }>) {
            const { id, product } = action.payload
            let item = state.find((productItem) => productItem.id === id)
            if (item) {
                item = product
            }
        },
        deleteProduct(state, action: PayloadAction<Product>) {


            const index = state.findIndex((productItem) => productItem.id === action.payload.id)
            if (index !== -1) {
                state.splice(index, 1)
            }
        },

    },
})

export const { add, update, deleteProduct } = productSlice.actions
export default productSlice.reducer