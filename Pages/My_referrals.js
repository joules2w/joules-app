import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

import Header from './Header';
import SearchBox from './SearchBox';

const MyReferrals = () => {
    return (
        <View style={styles.container}>
            <Header />
            <ImageBackground style={styles.backgroundimage} source={require('./Images/background.png')}>
                <Text style={styles.texthead01}>My Refarrals</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet consectetur. Maecenas cursus eget sed semper tellus tristique.</Text>
            </ImageBackground>
            <SearchBox />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        alignItems : 'center',
    },
    texthead01 : {
        color : 'black',
        textAlign : 'center',
        fontSize : 20,
        marginTop : 10,
        fontWeight : 'bold',
    },
    backgroundimage : {
        height : 150,
        width : Dimensions.get('window').width,
        opacity : 0.6,
    },
    text : {
        color : 'black',
        marginLeft : '10%',
        marginRight : '10%',
    }
})

export default MyReferrals;