import {View} from "react-native";
import styles from "../../styles/StyleSheet";
import Msg from "../Utilities/Msg";
import React from "react";

const Images = () => {
    return (
        <View style={styles.mainView}>
            <Msg msg='These are images made by' name='Katleen'/>
        </View>
    );
};

export default Images
