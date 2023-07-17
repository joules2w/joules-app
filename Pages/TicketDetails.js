import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';

import Header from './Header';
import Footer from './Footer';

const TicketDetails = ({ route }) => {

    const { ticket } = route.params;

    // const [selectedValue, setSelectedValue] = useState(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [selectedStatusOption, setSelectedStatusOption] = useState('');

    const options = ['High', 'Medium', 'Low'];
    const statusoption = ['Open', 'Closed', 'Reopen'];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleStatusDropdown = () => {
        setIsStatusDropdownOpen(!isStatusDropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const handleStatusSelect = (statusoption) => {
        setSelectedStatusOption(statusoption);
        setIsStatusDropdownOpen(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.texthead01}>{ticket.heading}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Save</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.texthead02}>Ticket Description</Text>
                <Text style={styles.description}>{ticket.ticketdescription} </Text>
                <Text style={styles.texthead02}>Ticket info</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.kay}>Ticket ID - </Text>
                    <Text style={styles.value}>{ticket.id}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.kay}>Created On - </Text>
                    <Text style={styles.value}>{ticket.createdOn}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.kay}>Created By - </Text>
                    <Text style={styles.value}>Value</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.kay}>Ticket Priority - </Text>
                    <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
                        <Text style={styles.dropdownButtonText}>{selectedOption || ticket.priority}</Text>
                    </TouchableOpacity>
                    <Modal
                        visible={isDropdownOpen}
                        transparent
                        animationType="fade"
                        onRequestClose={() => setIsDropdownOpen(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.dropdownList}>
                                {options.map((option, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handleOptionSelect(option)}
                                        style={styles.dropdownOption}
                                    >
                                        <Text style={styles.dropdownOptionText}>{option}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.kay}>Ticket Status - </Text>
                    <TouchableOpacity onPress={toggleStatusDropdown} style={styles.dropdownButton}>
                        <Text style={styles.dropdownButtonText}>{selectedStatusOption || ticket.status}</Text>
                    </TouchableOpacity>
                    <Modal
                        visible={isStatusDropdownOpen}
                        transparent
                        animationType="fade"
                        onRequestClose={() => setIsStatusDropdownOpen(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.dropdownList}>
                                {statusoption.map((statusoption, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handleStatusSelect(statusoption)}
                                        style={styles.dropdownOption}
                                    >
                                        <Text style={styles.dropdownOptionText}>{statusoption}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.line} />
                <Text style={styles.texthead01}>Discussion Point</Text>
                <Text style={styles.description}>Description</Text>
                <TextInput style={styles.input} placeholder='Type your message here...' placeholderTextColor='#808080'>
                </TextInput>
                <View style={styles.footer}>
                    <Footer />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        color: 'black',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texthead01: {
        color: 'black',
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: '5%',
        marginRight: '5%',
    },
    button: {
        backgroundColor: '#449B93',
        padding: 10,
        borderRadius: 5,
        marginRight: '5%',
    },
    buttontext: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 18,
    },
    texthead02: {
        color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: '5%',
    },
    description: {
        color: 'black',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '3%',
    },
    kay: {
        color: 'black',
        marginLeft: '5%',
        marginTop: '3%',
        fontSize: 17,
    },
    value: {
        color: 'black',
        marginRight: '5%',
        marginTop: '3%',
        fontWeight: "bold",
        fontSize: 17,
    },
    dropdownContainer: {
        width: '40%',
        height: '10%',
        marginBottom: '7%'
    },
    dropdown: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 5,
        padding: 10,
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
    line: {
        borderBottomColor: '#808080',
        borderBottomWidth: 0.5,
        margin: '5%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 5,
        margin: '5%',
    },
    dropdownButton: {
        width: '40%',
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2%',
    },
    dropdownButtonText: {
        fontSize: 16,
        color: 'black',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dropdownList: {
        backgroundColor: '#fff',
        width: 200,
        borderRadius: 5,
        padding: 10,
    },
    dropdownOption: {
        paddingVertical: 8,
    },
    dropdownOptionText: {
        fontSize: 16,
        color: 'black',
    },
})

export default TicketDetails;