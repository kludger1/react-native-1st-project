import React, {Fragment, useState} from "react";
import {TextInput, Text, View, Button} from "react-native";
import Msg from "../Utilities/Msg";

import styles from "../../styles/StyleSheet";
import {Link} from "react-router-native";
import {loginUser, logOutUser} from "../../redux/actions/authActions";
import {connect} from "react-redux";

const LogoutPage = ({auth, name,login, logOut}) => {

    const [value, setValue] = useState(name);
    const handleSubmit = () => {
        console.log(value)
    };

    return (
        <Fragment>
            <View style={styles.center}>
                <Msg msg='LogOut Page'/>
                <TextInput
                    placeholder={'Name...'}
                    style={styles.text_Input}
                    onChangeText={text => setValue(text)}
                    value={value}
                    onSubmitEditing={handleSubmit}
                />
                <Link to="/home" underlayColor="#f0f4f7" style={styles.mt_10}>
                    <Button title={'Login'} onPress={handleSubmit}/>
                </Link>
            </View>

        </Fragment>
    );

};

const mapStateToProps = state => {
    console.log(state);
    return {
        auth: state.userStatus.logout,
        name: state.userStatus.name
    }
};

const mapDispatchToProps = (dispatch, name) => {
    return {
        login: () => dispatch(loginUser(name)),
        logOut: () => dispatch(logOutUser())

    }
};



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LogoutPage)

