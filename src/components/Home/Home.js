import React, {Fragment} from "react";
import {Image, View} from "react-native";
import Msg from "../Utilities/Msg";

import styles from "../../styles/StyleSheet";
import Nav from "../Navigation/Nav"
import {connect} from "react-redux";

const Home = ({name}) => {
    const pic = {
        uri: 'https://i.redd.it/guyj6tzkint21.jpg'
    };

    return (
        <Fragment>
            <Nav/>
            <View style={styles.mainView}>
                <Image source={pic} style={{ alignSelf: 'stretch', height: 220, marginBottom: 20}}/>
                <Msg msg='The owner is' name={name}/>
            </View>

        </Fragment>
    );

};

const mapStateToProps = state => {
    console.log(state);
    return {
        name: state.userStatus.name
    }
};


export default connect(
    mapStateToProps
)(Home)

