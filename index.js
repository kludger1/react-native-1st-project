/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './src/App';
import {name as appName} from './src/app.json';
import { Provider } from 'react-redux';
import configureStore from "./src/redux/store";

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App/>
    </Provider>
    );

AppRegistry.registerComponent(appName, () => RNRedux);
