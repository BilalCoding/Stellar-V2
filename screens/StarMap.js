import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class StarMap extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Star Map</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});