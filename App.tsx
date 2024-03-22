import React, { useEffect } from 'react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import authenticationReducer from "./src/repositories/localStorage/authentication";
import locationsReducer from "./src/repositories/localStorage/locations";

import NavigationComponent from "./src/components/NavigationComponent/NavigationComponent";

const store = configureStore({
    reducer: {
        authentication: authenticationReducer, locationsReducer
    }
})

// For the icons list:
// https://ionic.io/ionicons

function App() {
    useEffect(() => {
        //SplashScreen.hide();
    }, []);

    return (
        <Provider store={store}>
            <NavigationComponent />
        </Provider>
    );
}

export default App;
