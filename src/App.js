/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, useState} from "react";
import { StyleSheet, Text, View, Image, Button} from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { connect } from 'react-redux';

import About from "./components/About/About";
import Msg from "./components/Utilities/Msg";
import Home from "./components/Home/Home";
import LogoutPage from "./components/Logout/Logout";
import {Topics, Topic} from "./components/Topics/Topics";
import Nav from "./components/Navigation/Nav"
import Images from "./components/Images/Images"

import styles from "./styles/StyleSheet";


const App = () => {
    return (
        <NativeRouter>
            <View style={styles.container}>

                <Route exact path="/" component={LogoutPage} />
                <Nav/>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/images" component={Images} />
            </View>
        </NativeRouter>
    );
};


export default App
