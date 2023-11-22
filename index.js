/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider, DefaultTheme } from "react-native-paper";
import CartProvider from './app/ui/providers/CartProvider';
import ProductProvider from './app/ui/providers/ProductProvider';

const theme = {
    ...DefaultTheme,
    dark:true,
    colors:{
        ...DefaultTheme.colors,
        primary: '#eee' //#ff4081
    }
}


export default function Main(){
    return(
        <PaperProvider theme={theme}>
            <CartProvider>
                <ProductProvider>
                    <App />
                </ProductProvider>
            </CartProvider>
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
