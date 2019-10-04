import {View} from "react-native";
import styles from "../../styles/StyleSheet";
import Msg from "../Utilities/Msg";
import React, {Fragment} from "react";
import Nav from "../Navigation/Nav";

const Images = () => {
    return (
        <Fragment>
            <Nav/>
        <View style={styles.mainView}>
            <Msg msg='These are images made by' name='Katleen'/>
        </View>
        </Fragment>
    );
};

export default Images
