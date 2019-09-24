import React, {Fragment, useState} from "react";
import {TextInput, Text, View} from "react-native";
import Msg from "../Utilities/Msg";

import styles from "../../styles/StyleSheet";
import {Link} from "react-router-native";
import toggleAbout from "../../redux/actions/aboutActions";
import {connect} from "react-redux";

const LogoutPage = ({auth, name}) => {
    console.log(auth, name);
    const [value, onChangeText] = React.useState('Name...');

    return (
        <Fragment>
            <View style={styles.center}>
                <Msg msg='LogedOut Page'/>
                <TextInput
                    style={styles.text_Input}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
                <Link to="/home" underlayColor="#f0f4f7" style={[styles.link__background, styles.navItem, styles.mt_10]}>
                    <Text style={styles.navItem__blue}>Login</Text>
                </Link>
            </View>

        </Fragment>
    );

};

const mapStateToProps = state => {
    return {
        auth: state.userStatus.user,
        name: state.userStatus.name
    }
};

const mapDispatchToProps = dispatch => {
    return {
        showToggle: () => dispatch(toggleAbout())

    }
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutPage)

