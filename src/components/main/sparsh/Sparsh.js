

import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Modal, Dimensions, Text, FlatList, View, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DatePickerModal } from 'react-native-paper-dates';
import { Button } from 'react-native-paper';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from '../../common/header/Header';
import Footer from '../../common/Footer';
import { ticket, assign } from '../../common/StaticValues';

const Sparsh = ({ navigation, onSelectionConfirmed }) => {
  const [activeTab, setActiveTab] = useState('Tab1');
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const PriorityOptions = ['High', 'Medium', 'Low'];


  const renderName = ({ item }) => {
    return (
      <View>
        <ScrollView>
          <TouchableOpacity key={item.id} onPress={() => handleItemToggle(item)}>
            <View style={styles.itemContainer}>
              <CheckBox
                isChecked={selectedItems.includes(item.id)}
                onClick={() => handleItemToggle(item)}
                checkBoxColor="#000000"
                checkedCheckBoxColor="#000000"
              />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  const [selectedTab, setSelectedTab] = useState('All');

  const getFilteredData = (selectedPriority) => {
    if (selectedPriority === 'All') {
      return ticket;
    }
    return ticket?.filter((item) => item.priority === selectedPriority);
  };

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const handleItemToggle = (item) => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems(selectedItems.filter((id) => id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item.id]);
    }
  };

  const handleSelectionConfirm = () => {
    setModalVisible(false);
    if (typeof onSelectionConfirmed === 'function') {
      onSelectionConfirmed(selectedItems);
    }
  };

  const clearFilter = () => {
    setSelectedPriority('');
    setSelectedItems('');
    setSelectedTab('All'); // Set selectedTab to 'All' to show all tickets
  };

  const ticketDetails = (ticket) => {
    navigation.navigate('TicketDetails', { ticket });
  };

  const handlePrioritySelect = (option) => {
    setSelectedPriority(option);
    setIsPriorityDropdownOpen(false);
    // After selecting the priority, filter the tickets based on the selected priority
    setSelectedTab(option);
  };

  const togglePriorityDropdown = () => {
    setIsPriorityDropdownOpen(!isPriorityDropdownOpen);
  };

  const ticketItem = ({ item }) => {
    let backgroundColor = '#808080';
    if (item.priority === 'High') {
      backgroundColor = 'green';
    } else if (item.priority === 'Medium') {
      backgroundColor = 'blue';
    } else if (item.priority === 'Low') {
      backgroundColor = 'red';
    }

    return (
      <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity onPress={() => ticketDetails(item)}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[styles.priority, { backgroundColor: backgroundColor }]}>
              <Text style={styles.texthead03}>{item.priority}</Text>
            </Text>
            <Text style={styles.heading02}>Created on {item.createdOn}</Text>
          </View>
          <Text style={styles.heading01}>{item.heading}</Text>
          <Text style={styles.heading02}>{item.ticketdescription}</Text>
          <Text style={styles.texthead03}>Assigned on {item.assigned}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderTabContent = () => {
    const filteredTickets = getFilteredData(selectedPriority || selectedTab);
    return (
      <FlatList
        scrollEnabled={false}
        data={filteredTickets}
        keyExtractor={(ticket) => ticket.id.toString()}
        renderItem={ticketItem}
      />
    );
  };

  const [range, setRange] = React.useState({ startDate: undefined, endDate: undefined });
  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback(
    ({ startDate, endDate }) => {
      setOpen(false);
      setRange({ startDate, endDate });
    },
    [setOpen, setRange]
  );

  const getButtonTitle = () => {
    if (range.startDate && range.endDate) {
      const startDateString = range.startDate.toDateString();
      const endDateString = range.endDate.toDateString();
      return `${startDateString} - ${endDateString}`;
    } else {
      return "Created Date:";
    }
  };

  const logout = () => {
    navigation.navigate('Login');
  };
  const interviewpanel = () => {
    navigation.navigate('InterviewPanel');
  };
  const jobportal = () => {
    navigation.navigate('Job_Portal');
  };
  const sparsh = () => {
    navigation.navigate('Sparsh');
  };
  const home = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Header */}
          <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />

          {/* Image background */}
          <ImageBackground source={require('../../../Assets/Images/background.jpg')} style={styles.background}>
            <Text style={styles.texthead01}>Sparsh</Text>
            <Text style={styles.texthead02}>
              Say Hello to Hassle-Free HR Query Resolution with sparsh : Your On-Stop Tcking Raising Platform
            </Text>
          </ImageBackground>

          {/* Create new ticket */}

          <TouchableOpacity style={styles.createbutton} onPress={() => navigation.navigate('ticket')}>
            <Text style={styles.createbuttontext}>Create New Ticket</Text>
          </TouchableOpacity>

          {/* Open and Close Tickets */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tabItem, activeTab === 'Tab1' && styles.activeTab]}
              onPress={() => handleTabPress('Tab1')}>
              <Text style={styles.tabText}>Open Ticket</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabItem, activeTab === 'Tab2' && styles.activeTab]}
              onPress={() => handleTabPress('Tab2')}>
              <Text style={styles.tabText}>Close Ticket</Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'Tab1' && (
            <View>
              <View style={styles.tabview}>
                <Text style={styles.text}>FilterBy</Text>
                <TouchableOpacity onPress={clearFilter}>
                  <Text style={styles.clearfiltertext}>Clear Filter</Text>
                </TouchableOpacity>
              </View>

              {/* Select Ticket priority */}
              <TouchableWithoutFeedback onPress={togglePriorityDropdown}>
              <TouchableOpacity onPress={togglePriorityDropdown} style={styles.dropdownButton}>
                <Text style={styles.dropdownButtonText}>Ticket priority : {selectedPriority}</Text>
              </TouchableOpacity>
              </TouchableWithoutFeedback>
              <Modal transparent visible={isPriorityDropdownOpen} animationType="fade" onRequestClose={() => setIsPriorityDropdownOpen(false)}>
                <View style={styles.modalContainer}>
                  <View style={styles.dropdownList}>
                    {PriorityOptions.map((option, index) => (
                      <TouchableOpacity style={styles.dropdownOption} key={index} onPress={() => handlePrioritySelect(option)}>
                        <Text style={styles.dropdownOptionText}>{option}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              </Modal>
              




              {/* Select Ticket assign to */}
              <TouchableOpacity style={styles.dropdownButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.dropdownButtonText}>Ticket Assigned To :</Text>
              </TouchableOpacity>
              <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <FlatList
                      scrollEnabled={true}
                      data={assign}
                      keyExtractor={(item) => item?.jobId?.toString()}
                      renderItem={renderName}
                    />
                    <TouchableOpacity style={styles.confirmbutton} onPress={handleSelectionConfirm}>
                      <Text style={styles.confirmtext}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>


              {/* date with range and custom dates */}
              <View style={styles.container1}>
                <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined" style={styles.button022}>
                  <Text style={styles.buttonText}>{getButtonTitle()}</Text>
                </Button>
                <DatePickerModal
                  mode="range"
                  visible={open}
                  onDismiss={onDismiss}
                  startDate={range.startDate}
                  endDate={range.endDate}
                  onConfirm={onConfirm}
                  startLabel="Start Date"
                  endLabel="End Date"
                  saveLabel="Save"
                />
              </View>


              {/* Search */}
              <View style={styles.view}>
                <Icon name="search" size={15} color="#666" style={styles.searchIcon} />
                <TextInput
                  style={styles.textinput}
                  maxLength={10}
                  placeholder="search with ticket number here.."
                  keyboardType="numeric"
                  placeholderTextColor="#808080"
                />
              </View>

              {/* Tickets */}
              <View>{renderTabContent()}</View>
            </View>
          )}
          {activeTab === 'Tab2' && <View></View>}
          <View style={styles.footer}>
            <Footer />
          </View>
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 120,
  },
  background: {
    height: 150,
    width: Dimensions.get('window').width,
    opacity: 0.35,
  },
  texthead01: {
    marginLeft: '8%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '3%',
    marginBottom: '5%',
  },
  texthead02: {
    marginLeft: '8%',
    marginRight: '8%',
    color: 'black',
    fontSize: 16,
    marginBottom: '5%',
    textAlign: 'justify',
  },
  createbutton: {
    padding: 10,
    borderRadius: 10,
    textAlign: 'left',
  },
  createbuttontext: {
    color: '#fff',
    alignSelf: 'flex-end',
    marginRight: '5%',
    borderRadius: 10,
    backgroundColor: '#5f9ea0',
    padding: 10,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '5%',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#808080',
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#5f9ea0',
  },
  tabText: {
    fontSize: 15,
    color: '#fff',
  },
  tabview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '5%',
  },
  text: {
    color: '#000000',
  },
  text01: {
    color: '#000000',
    marginLeft: '5%',
  },
  clearfiltertext: {
    color: 'red',
    textDecorationLine: 'underline',
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 15,
    alignItems: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%',
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
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    width: '80%',
    height: '70%'
  },
  dropdownList: {
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 5,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  dropdownOption: {
    paddingVertical: 5,
  },
  dropdownOptionText: {
    fontSize: 15,
    color: '#000000',
  },
  confirmbutton: {
    backgroundColor: '#5f9ea0',
    marginLeft: '10%',
    marginRight: '10%',
    borderRadius: 10,
  },
  confirmtext: {
    color: '#fff',
    fontSize: 15,
    alignSelf: 'center',
    padding: 10,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#808080',
    margin: '5%',
    width: '80%',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: '2%',
  },
  textinput: {
    color: '#000000'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: 'black',
    padding: 5,
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '5%',
  },
  elevation: {
    shadowColor: 'black',
    elevation: 3,
  },
  priority: {
    borderRadius: 8,
    padding: 5,
    marginLeft: '5%'
  },
  texthead03: {
    fontSize: 15,
    color: '#fff',
  },
  heading01: {
    fontSize: 16,
    marginLeft: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: 'black',
  },
  heading02: {
    fontSize: 15,
    marginBottom: 13,
    marginLeft: 20,
    color: 'black',
  },
  subtabContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  subtabItem: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#808080',
    marginLeft: '5%',
    borderRadius: 5,
    color: '#fff',
  },
  subactiveTab: {
    backgroundColor: '#5f9ea0',
  },
  subtabText: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#fff',
  },
  manualInput: {
    borderWidth: 0.5,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 5,
    color: '#000000',
    alignSelf: 'center',
    margin: '1%',
  },
  pickButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'center',
    marginRight: '5%',
  },
  pickButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button022: {
    // borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    borderRadius: 15,
  },
  buttonText: {
    color: 'black',
    textAlignVertical: "center",
    fontWeight: '400',

  },
  container1: {
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: '2%'
  },
});

export default Sparsh;