import { Text, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux'
import store, { persistor } from './src/app/store';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './src/pages/Home';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
      </PersistGate>

    </Provider>
  );
};

export default App;
