import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import Header from './Header';
import Footer from './Footer';

const TicketDetails = () => {

    const [selectedValue, setSelectedValue] = useState(null);

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
                    <DropDownPicker
                    items={[
                        { label: 'Value 1', value: 'Value 1' },
                        { label: 'Value 2', value: 'Value 2' },
                        { label: 'Value 3', value: 'Value 3' },
                        ]}
                        defaultValue={selectedValue}
                        containerStyle={styles.dropdownContainer}
                        style={styles.dropdown}
                        itemStyle={styles.dropdownItem}
                        labelStyle={styles.dropdownLabel}
                        dropDownStyle={styles.dropdownMenu}
                        arrowColor="black"
                        onChangeItem={(item) => setSelectedValue(item.value)}
                    />
                </View>
                <View style={{ flexDirection : 'row', justifyContent : 'flex-start' }}>
                    <Text style={styles.kay}>Ticket Status - </Text>
                    <DropDownPicker
                    items={[
                        { label: 'Value 1', value: 'Value 1' },
                        { label: 'Value 2', value: 'Value 2' },
                        { label: 'Value 3', value: 'Value 3' },
                        ]}
                        defaultValue={selectedValue}
                        containerStyle={styles.dropdownContainer}
                        style={styles.dropdown}
                        itemStyle={styles.dropdownItem}
                        labelStyle={styles.dropdownLabel}
                        dropDownStyle={styles.dropdownMenu}
                        arrowColor="black"
                        onChangeItem={(item) => setSelectedValue(item.value)}
                    />
                </View>
                <View style={styles.line} />
                <Text style={styles.texthead01}>Discussion Point</Text>
                <Text style={styles.description}>Description</Text>
                <TextInput style={styles.input} placeholder='Type your message here...' placeholderTextColor='#808080'>
                    {/* <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Send</Text>
                    </TouchableOpacity> */}
                </TextInput>
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
    },
    dropdownContainer: {
        width: '40%',
        height: '10%',
        marginBottom : '7%'
      },
      dropdown: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 5,
        padding : 10,
      },
      dropdownItem: {
        justifyContent: 'flex-start',
      },
      dropdownLabel: {
        color: 'black',
      },
      dropdownMenu: {
        marginTop: 8,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        borderColor: '#333',
      },
      line : {
        borderBottomColor : '#808080',
        borderBottomWidth : 0.5,
        margin : '5%',
    },
    input : {
        borderWidth : 1,
        borderColor : '#808080',
        borderRadius : 5,
        margin : '5%',
    }
})

export default TicketDetails;