import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        paddingTop: 50,
        alignItems: "center"
    },
    container: {
        flex:1,
        marginTop: 25,
        padding: 10
    },
    header: {
        fontSize: 20,
        paddingBottom:10
    },
    link__background: {
        backgroundColor: '#5499E7',
        padding: 10
    },
    nav: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    navItem: {
        alignItems: "center",
        padding: 10
    },
    navItem__blue: {
        color: "#042348"
    },
    subNavItem: {
        padding: 5
    },
    topic: {
        textAlign: "center",
        fontSize: 15
    },
    mb_20: {
        marginBottom: 20
    },
    mt_10: {
        marginTop: 10
    },
    text_Input: {
        backgroundColor: "#EDEDED",
        marginTop: 30,
        marginBottom: 20,
        borderBottomColor: "#5499E7",
        borderBottomWidth: 2,
        padding: 10,
        width: "80%"

    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default styles
