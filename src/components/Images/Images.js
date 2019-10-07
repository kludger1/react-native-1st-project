import {View} from "react-native";
import styles from "../../styles/StyleSheet";
import Msg from "../Utilities/Msg";
import React, {Fragment} from "react";
import Nav from "../Navigation/Nav";
import {connect} from "react-redux";

const Images = ({name}) => {
    return (
        <Fragment>
            <Nav/>
        <View style={styles.mainView}>
            <Msg msg='These are images made by' name={name}/>
        </View>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        name: state.userStatus.name
    }
};



export default connect(mapStateToProps)(Images)
