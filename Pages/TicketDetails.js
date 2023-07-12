import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';


import Header from './Header';
import Footer from './Footer';

const TicketDetails = () => {

    const [selectedExperience, setSelectedExperience] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header />
                <View style={{ flexDirection : 'row', justifyContent : 'space-between' }}>
                    <Text style={styles.texthead01}>Ticket name</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Save</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.texthead02}>Ticket Description</Text>
                <Text style={styles.description}>Description</Text>
                <Text style={styles.texthead02}>Ticket info</Text>
                <View style={{ flexDirection : 'row', justifyContent : 'flex-start' }}>
                    <Text style={styles.kay}>Ticket ID - </Text>
                    <Text style={styles.value}>Value</Text>
                </View>
                <View style={{ flexDirection : 'row', justifyContent : 'flex-start' }}>
                    <Text style={styles.kay}>Created On - </Text>
                    <Text style={styles.value}>Value</Text>
                </View>
                <View style={{ flexDirection : 'row', justifyContent : 'flex-start' }}>
                    <Text style={styles.kay}>Created By - </Text>
                    <Text style={styles.value}>Value</Text>
                </View>
                <View style={{ flexDirection : 'row', justifyContent : 'flex-start' }}>
                    <Text style={styles.kay}>Ticket Priority - </Text>
                    <Picker
              selectedValue={selectedExperience}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedExperience(itemValue)}
            >
              <Picker.Item label="Select experience" value="" />
              <Picker.Item label="1-2 years" value="1-2 years" />
              <Picker.Item label="3-5 years" value="3-5 years" />
              <Picker.Item label="6-10 years" value="6-10 years" />
            </Picker>
                </View>
                <View style={{ flexDirection : 'row', justifyContent : 'flex-start' }}>
                    <Text style={styles.kay}>Ticket Status - </Text>
                    <Text style={styles.value}>Value</Text>
                </View>
                <View style={styles.footer}>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
    },
    text : {
        color : 'black',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120
    },
    footer : {
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        justifyContent : 'center',
        alignItems : 'center',
    },
    texthead01 : {
        color : 'black',
        fontSize : 18,
        fontWeight : "bold",
        marginLeft : '5%',
        marginRight : '5%',
    },
    button: {
        backgroundColor : '#449B93',
        padding : 10,
        borderRadius : 5,
        marginRight : '5%',
    },
    buttontext : {
        color : '#fff',
        fontWeight : "bold",
        fontSize : 18,
    },
    texthead02 : {
        color : 'black',
        fontSize : 20,
        fontWeight : "bold",
        marginLeft : '5%',
    },
    description : {
        color : 'black',
        marginLeft : '5%',
        marginRight : '5%',
        marginBottom : '3%',
    },
    kay : {
        color : 'black',
        marginLeft : '5%',
        marginTop : '3%',
        fontSize : 17,
    },
    value : {
        color : 'black',
        marginRight : '5%',
        marginTop : '3%',
        fontWeight : "bold",
        fontSize : 17,
    }
})

export default TicketDetails;