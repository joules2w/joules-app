import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Dimensions, ScrollView } from 'react-native';

import Header from "./Header";
import Footer from "./Footer";
import SearchBox from "./SearchBox";
import Filter from "./Filter";

const InterViewPanel = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Header />
                <ImageBackground style={styles.background} source={require('./Images/background.png')}>
                    <Text style={styles.texthead01}>Interview Panel</Text>
                    <Text style={styles.texthead02}>Welcome to our Interview Panel page, where you can discover everything you need to know about panel interviews and how to excel in them.</Text>
                </ImageBackground>
                <View style={{ flexDirection : 'row', width : '100%', justifyContent : 'center', marginRight : '10%'}} >
                <SearchBox />
                <Filter />
                </View>

                <View style={[styles.card, styles.elevation]}> 
                    <Text style={styles.heading01}>Interactive Developer</Text>
                    <Text style={styles.price}>₹ 4000 per panel member</Text>
                    <Text style={styles.heading02}>Interactive Developer</Text>
                    <View style={{flexDirection : 'row', width : '80%', justifyContent : 'space-around'}}>
                    <Text style={styles.button01}><Text style={styles.text}>JavaScript</Text></Text>
                    <Text style={styles.button01}><Text style={styles.text}>node.js</Text></Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('MoreDetails')}>
                        <Text style={styles.moredetails}>More details ➤</Text>
                    </TouchableOpacity>
                </View>









                <Footer />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        alignContent : 'center',
    },
    background : {
        height : 150,
        width : Dimensions.get('window').width,
        opacity : 0.5,
    },
    texthead01 : {
        color : 'black',
        fontSize : 30,
        textAlign : 'left',
        marginLeft : '8%',
        marginTop : 10,
    },
    texthead02 : {
        color : 'black',
        fontSize : 18,
        textAlign : 'left',
        marginLeft : '8%',
        marginRight : '8%',
    },
    card: {  
        backgroundColor: 'white',  
        borderRadius: 10,
        borderColor : 'black', 
        paddingVertical: 10,  
        paddingHorizontal: 10,  
        marginLeft : '8%',
        marginRight : '8%',
        marginBottom : '8%',
    },  
    elevation: {  
        shadowColor: 'black',  
        elevation: 10,  
    },
    heading01 : {  
        fontSize: 18,  
        fontWeight: '600', 
        marginLeft : '8%', 
        // marginBottom: '4%', 
        color : 'black',
    },  
    heading02 : {  
        fontSize: 15,  
        fontWeight: '600',  
        marginBottom: '5%', 
        marginLeft : '8%', 
        color : 'gray',
    },
    price : {
        color : 'black',
        fontSize : 14,
        fontWeight : 'bold',
        marginLeft : '8%',
        marginRight : '8%',
        marginBottom : '4%',
    },
    button01 : {
        backgroundColor : 'lightblue',
        marginLeft : '10%',
        borderRadius : 10,
        paddingHorizontal : 10,
        paddingVertical : 3,
    },
    button02 : {
        backgroundColor : 'lightblue',
        marginLeft : '10%',
        marginBottom : '5%',
        borderRadius : 10,
        paddingHorizontal : 10,
        paddingVertical : 3,
    },
    text : {
        color : 'black'
    },
    moredetails : {
        color : 'red',
        textAlign : 'right',
        marginRight : '3%',
        textDecorationLine : 'underline',
        fontSize : 15
    }
})

export default InterViewPanel;