import React from "react"
import {Text, View} from "react-native";
import styles from "../../styles/StyleSheet";
import {Route, Link } from "react-router-native"

const Topic = ({ match }) => {
    return <Text style={styles.topic}>{match.params.topicId} topic...</Text>;
};

const Topics = ({ match }) => {
    return (
        <View>
            <Text style={styles.header}>Topics</Text>
            <View>
                <Link
                    to={`${match.url}/link1`}
                    style={styles.subNavItem}
                    underlayColor="#f0f4f7"
                >
                    <Text>Link 1</Text>
                </Link>
                <Link
                    to={`${match.url}/link2`}
                    style={styles.subNavItem}
                    underlayColor="#f0f4f7"
                >
                    <Text>Link 2</Text>
                </Link>
                <Link
                    to={`${match.url}/link3`}
                    style={styles.subNavItem}
                    underlayColor="#f0f4f7"
                >
                    <Text>Link 3</Text>
                </Link>
            </View>

            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.url}
                render={() => <Text style={styles.topic}>Please select a topic.</Text>}
            />
        </View>
    );
};

export {Topic, Topics}
