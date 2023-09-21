import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { postApi } from '../redux/api/posts';
import products from '../redux/reducer/products';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,

} from 'redux-persist'




const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    products: products,
    [postApi.reducerPath]: postApi.reducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(thunk, logger, postApi.middleware),
})
export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
export default store
