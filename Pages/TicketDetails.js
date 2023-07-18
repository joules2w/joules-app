import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput, ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DocumentPicker from 'react-native-document-picker';

import Header from './Header';
import Footer from './Footer';

const TicketDetails = ({ route }) => {

    const { ticket } = route.params;
    const [text, setText] = useState('');

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

    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf],
                maxFilesize: 10, // Maximum file size in MB
                presentationStyle: 'fullScreen',
            });
            setFileResponse(response);
        } catch (err) {
            console.warn(err);
        }
    }, []);

    const logout = () => {
        navigation.navigate('Login')
    }
    const interviewpanel = () => {
        navigation.navigate('InterviewPanel')
    }
    const jobportal = () => {
        navigation.navigate('Job_Portal')
    }
    const sparsh = () => {
        navigation.navigate('Sparsh')
    }
    const home = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.texthead01}>{ticket.heading}</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttontext}>Save</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.heading01}>Ticket Description</Text>
                <Text style={styles.heading02}>{ticket.ticketdescription} </Text>
                <Text style={styles.texthead01}>Ticket info</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.heading01}>Ticket ID - </Text>
                    <Text style={styles.heading03}>{ticket.id}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.heading01}>Created On - </Text>
                    <Text style={styles.heading03}>{ticket.createdOn}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.heading01}>Created By - </Text>
                    <Text style={styles.heading03}>{ticket.createdBy}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.heading01}>Ticket Priority - </Text>
                    <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
                        <Text style={styles.dropdownButtonText}>{selectedOption || ticket.priority}</Text>
                    </TouchableOpacity>
                    <Modal
                        visible={isDropdownOpen}
                        transparent
                        animationType="fade"
                        onRequestClose={() => setIsDropdownOpen(false)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.dropdownList}>
                                {options.map((option, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handleOptionSelect(option)}
                                        style={styles.dropdownOption}>
                                        <Text style={styles.dropdownOptionText}>{option}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.heading01}>Ticket Status - </Text>
                    <TouchableOpacity onPress={toggleStatusDropdown} style={styles.dropdownButton}>
                        <Text style={styles.dropdownButtonText}>{selectedStatusOption || ticket.status}</Text>
                    </TouchableOpacity>
                    <Modal
                        visible={isStatusDropdownOpen}
                        transparent
                        animationType="fade"
                        onRequestClose={() => setIsStatusDropdownOpen(false)}>
                        <View style={styles.modalContainer}>
                            <View style={styles.dropdownList}>
                                {statusoption.map((statusoption, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => handleStatusSelect(statusoption)}
                                        style={styles.dropdownOption}>
                                        <Text style={styles.dropdownOptionText}>{statusoption}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </Modal>
                </View>
                <View style={styles.line} />
                <Text style={styles.texthead01}>Discussion Point</Text>
                <Text style={styles.heading02}>Description</Text>
                <View style={styles.textInputContainer}>
                    <TextInput multiline style={styles.input}
                        placeholder='Type your message here...'
                        placeholderTextColor='#808080'
                        value={text}
                        onChangeText={setText} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button01}>
                            <Text style={styles.buttontext} onPress={handleDocumentSelection}>
                                <MaterialIcons name="attach-file" size={18} style={styles.icon} />
                                Attach file</Text>
                            {fileResponse.map((file, index) => (
                                <Text style={styles.attachtext}
                                    key={index.toString()}
                                    numberOfLines={1}
                                    ellipsizeMode={'middle'}>
                                    {file?.uri}
                                </Text>
                            ))}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttontext}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120
    },
    texthead01: {
        color: 'black',
        fontSize: 20,
        textAlign: 'left',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: 15,
        fontWeight: "bold",
    },
    texthead02: {
        color: 'black',
        fontSize: 15,
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '8%',
        textAlign: "justify",
    },
    heading01: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: '5%',
        color: 'black',
        padding: 5,
    },
    heading02: {
        fontSize: 13,
        marginLeft: '5%',
        color: '#000000',
        textAlign: 'justify',
        marginRight: '5%',
        padding: 5,
    },
    heading03: {
        fontSize: 13,
        color: '#000000',
        fontWeight: "bold",
        textAlign: 'justify',
        marginRight: '5%',
        padding: 5,
    },
    button: {
        backgroundColor: '#449B93',
        padding: 10,
        borderRadius: 5,
        marginRight: '5%',
    },
    button01: {
        backgroundColor: '#449B93',
        padding: 10,
        borderRadius: 5,
        marginRight: '5%',
        width: '50%'
    },
    buttontext: {
        color: '#fff',
        fontSize: 15,
    },
    dropdownButton: {
        width: '30%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1%',
    },
    dropdownButtonText: {
        fontSize: 13,
        color: '#000000',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dropdownList: {
        backgroundColor: '#fff',
        width: 150,
        borderRadius: 5,
        padding: 10,
    },
    dropdownOption: {
        paddingVertical: 5,
    },
    dropdownOptionText: {
        fontSize: 15,
        color: '#000000',
    },
    textInputContainer: {
        position: 'relative',
    },
    line: {
        borderBottomColor: '#808080',
        borderBottomWidth: 0.5,
        marginLeft: '5%',
        marginRight: '5%',
        padding: 5
    },
    input: {
        borderWidth: 1,
        borderColor: '#808080',
        borderRadius: 5,
        margin: '5%',
        padding: 10,
        height: 150,
        color: '#000000',
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
    },
    attachtext: {
        color: 'black',
        alignSelf: 'center',
        marginLeft: '5%',
        fontSize: 13
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default TicketDetails;