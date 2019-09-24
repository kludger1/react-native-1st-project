import React, {Fragment} from "react";
import {Image, View} from "react-native";
import Msg from "../Utilities/Msg";

import styles from "../../styles/StyleSheet";

const Home = () => {
    const pic = {
        uri: 'https://i.redd.it/guyj6tzkint21.jpg'
    };

    return (
        <Fragment>
            <View style={styles.mainView}>
                <Image source={pic} style={{ alignSelf: 'stretch', height: 220, marginBottom: 20}}/>
                <Msg msg='The owner is' name='Katleen'/>
            </View>

        </Fragment>
    );

};

export default Home
