import React, {Component} from 'react';
import {
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image,
} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.safe} />
                <ImageBackground source={require('../assets/space.gif')} style={styles.bgImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Stellar</Text>
                        <Image source={'../assets/main-icon.png'} style={{ width: 80, height: 80 }} />
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() => {
                        this.props.navigation.navigate('DailyPic');
                    }}>
                        <Text>Daily Pictures</Text>
                        <Image source={'../assets/main-icon.png'} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() => {
                        this.props.navigation.navigate('StarMap')
                    }}>
                        <Text>Star Map</Text>
                        <Image source={'../assets/main-icon.png'} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() => {
                        this.props.navigation.navigate('Spacecrafts')
                    }}>
                        <Text>Spacecrafts</Text>
                        <Image source={'../assets/main-icon.png'} style={{ width: 50, height: 50 }} />
                    </TouchableOpacity>
                </ImageBackground>
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
    safe: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    bgImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    routeText: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: 30,
    },
});