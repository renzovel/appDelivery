/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider, DefaultTheme } from "react-native-paper";

const theme = {
    ...DefaultTheme,
    dark:true,
    colors:{
        ...DefaultTheme,
        primary: '#eee' 
    }
}

export default function Main(){
    return(
        <PaperProvider theme={theme}>
            <App />
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
