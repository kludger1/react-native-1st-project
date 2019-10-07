import React, {useState, Fragment} from "react"
import { connect } from 'react-redux'
import {Text, View, Button} from "react-native";
import {Link} from "react-router-native";
import Msg from "../Utilities/Msg";

import toggleAbout from "../../redux/actions/aboutActions";

import styles from "../../styles/StyleSheet";
import Nav from "../Navigation/Nav";



const  About = ({show, showToggle, name}) => {
    const title = `See Images made by ${name}`;

    return (
        <Fragment>
            <Nav/>
        <View style={styles.mainView}>
            <Msg msg='The about page for' name={name}/>
            {show && <Text style={styles.mt_10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Sit amet consectetur adipiscing elit ut aliquam purus sit.</Text>}
            {show && <Text style={styles.mt_10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Sit amet consectetur adipiscing elit ut aliquam purus sit.</Text>}
            {show && <Text style={styles.mt_10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id faucibus nisl tincidunt eget nullam non. Sit amet consectetur adipiscing elit ut aliquam purus sit.</Text>}
            <Button
                title={show ? 'Show Less...' : 'Show More...'}
                onPress={showToggle}>
            </Button>
            <Link to="/images" underlayColor="#f0f4f7" style={[styles.link__background, styles.navItem, styles.mt_10]}>
                <Text style={styles.navItem__blue}>{title}</Text>
            </Link>
        </View>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        show: state.about.show,
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
)(About)
