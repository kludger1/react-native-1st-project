/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import { connect } from 'react-redux';

import About from "./components/About/About";
import Msg from "./components/Utilities/Msg";
import Home from "./components/Home/Home";
import LogoutPage from "./components/Logout/Logout";
import {Topics, Topic} from "./components/Topics/Topics";
import Images from "./components/Images/Images"

import {TextInput, Text, View, Button} from "react-native";
import styles from "./styles/StyleSheet";
import {loginUser, logOutUser} from "./redux/actions/authActions";





const App = ({auth}) => {
    return(
        <NativeRouter>
            <View style={styles.container}>
                {!auth && <Route exact path="/" component={LogoutPage}/>}
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/images" component={Images} />
            </View>
        </NativeRouter>
    )
};


const mapStateToProps = state => {
    return {
        auth: state.userStatus.logout
    }
};



export default connect(mapStateToProps)(App)
