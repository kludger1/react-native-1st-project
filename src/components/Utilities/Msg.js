import React, {Fragment} from "react";
import {Text, View} from "react-native";

import styles from "../../styles/StyleSheet";

const Msg = ({msg, name}) => {
    return (
        <Fragment>
            <View>
                <Text> {msg + ' ' + name}</Text>
            </View>
        </Fragment>
    );
};

export default Msg
