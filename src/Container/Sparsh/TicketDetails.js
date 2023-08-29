import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, TextInput, ScrollView, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DocumentPicker from 'react-native-document-picker';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';

const TicketDetails = ({ route, navigation }) => {

    const { ticket } = route.params;

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [description, setDescription] = useState('');
    const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
    const [selectedStatusOption, setSelectedStatusOption] = useState('');

    const options = ['High', 'Medium', 'Low'];
    const statusoption = ['Open', 'Closed', 'Reopen'];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handlePriorityPress = () => {
        setIsDropdownOpen(false);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const toggleStatusDropdown = () => {
        setIsStatusDropdownOpen(!isStatusDropdownOpen);
    };

    const handleStatusSelect = (statusoption) => {
        setSelectedStatusOption(statusoption);
        setIsStatusDropdownOpen(false);
    };

    const handleTicketPress = () => {
        setIsStatusDropdownOpen(false);
    };

    const Save = () => {
        Alert.alert("Saved successfully");
        navigation.goBack();
    }

    const Send = () => {
        if(!description){
            Alert.alert("Enter some message");
        }
        else if(fileResponse.length===0){
            Alert.alert("Attach a required pdf file");
        }
        else{
            setDescription('');
            setFileResponse([]);
            Alert.alert("Send successfully");
        }
    }

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

    const handleDescriptionChange = (text) => {
        if (text.length <= 500) {
            setDescription(text);
        }
    };

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

                {/* Heading */}
                <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />

                {/* Title */}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.texthead01}>{ticket.heading}</Text>
                    <TouchableOpacity style={styles.button} onPress={Save}>
                        <Text style={styles.buttontext}>Save</Text>
                    </TouchableOpacity>
                </View>

                {/* Description */}
                <Text style={styles.heading01}>Ticket Description</Text>
                <Text style={styles.heading02}>{ticket.ticketdescription} </Text>

                {/* Ticket Information */}
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

                {/* Ticket Priority */}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.heading01}>Ticket Priority - </Text>
                    <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
                        <Text style={styles.dropdownButtonText}>{selectedOption || ticket.priority}</Text>
                    </TouchableOpacity>
                    <Modal visible={isDropdownOpen} transparent animationType="fade"
                        onRequestClose={() => setIsDropdownOpen(false)}>
                        <TouchableOpacity style={styles.backdrop} onPress={handlePriorityPress}>
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
                        </TouchableOpacity>
                    </Modal>
                </View>

                {/* Ticket Status */}
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={styles.heading01}>Ticket Status - </Text>
                    <TouchableOpacity onPress={toggleStatusDropdown} style={styles.dropdownButton}>
                        <Text style={styles.dropdownButtonText}>{selectedStatusOption || ticket.status}</Text>
                    </TouchableOpacity>
                    <Modal visible={isStatusDropdownOpen} transparent animationType="fade"
                        onRequestClose={() => setIsStatusDropdownOpen(false)}>
                        <TouchableOpacity style={styles.backdrop} onPress={handleTicketPress}>
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
                        </TouchableOpacity>
                    </Modal>
                </View>
                <View style={styles.line} />

                {/* Discussion point */}
                <Text style={styles.texthead01}>Discussion Point</Text>
                <Text style={styles.heading02}>Description</Text>
                <View style={styles.textInputContainer}>
                    <TextInput style={styles.descriptionInput} multiline
                        onChangeText={handleDescriptionChange}
                        value={description}
                        placeholder="Enter description (max 500 characters)"
                        placeholderTextColor={'#808080'}
                        maxLength={500} />
                    <View style={styles.buttonContainer01}>
                        <TouchableOpacity style={styles.button01}>
                            <Text style={styles.buttontext} onPress={handleDocumentSelection}>
                                <MaterialIcons name="attach-file" size={18} style={styles.icon} />Attach file</Text>
                            {fileResponse.map((file, index) => (
                                <Text style={styles.attachtext}
                                    key={index.toString()}
                                    numberOfLines={1}
                                    ellipsizeMode={'middle'}>
                                    {file?.uri}
                                </Text>
                            ))}
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button01} onPress={Send}>
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
        marginHorizontal: '5%',
        maxWidth : '50%',
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
    descriptionInput: {
        height: 100,
        borderWidth: 1,
        borderRadius: 5,
        textAlignVertical: 'top',
        color: '#000000',
        marginLeft: '5%',
        marginRight: '5%',
    },
    line: {
        borderBottomColor: '#808080',
        borderBottomWidth: 0.5,
        marginLeft: '5%',
        marginRight: '5%',
        padding: 5
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    buttonContainer01: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
        color: '#000000',
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