import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Modal, Dimensions, Text, FlatList, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import { ticket, assign } from '../../components/StaticValues';

const Sparsh = ({ navigation, onSelectionConfirmed }) => {

  const [activeTab, setActiveTab] = useState('Tab1');

  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState('');

  const [isDateDropdownOpen, setIsDateDropdownOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [manualFromDate, setManualFromDate] = useState('');
  const [manualToDate, setManualToDate] = useState('');

  const [selectedDate, setSelectedDate] = useState('');
  const [selectedFromDate, setSelectedFromDate] = useState('');
  const [selectedToDate, setSelectedToDate] = useState('');

  const [selectedItems, setSelectedItems] = useState([]);

  const [isFromDateVisible, setIsFromDateVisible] = useState(false);
  const [isToDateVisible, setIsToDateVisible] = useState(false);

  const [isDatePickerVisible, setDatePickerVisible] = useState(null);

  const [selectedTab, setSelectedTab] = useState('All');

  const PriorityOptions = ['High', 'Medium', 'Low'];

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const clearFilter = () => {
    setSelectedPriority('');
    setSelectedItems('');
    setSelectedDate('');
    setSelectedFromDate('');
    setManualFromDate('');
    setSelectedToDate('');
    setManualToDate('');
    setSelectedTab('All'); // Set selectedTab to 'All' to show all tickets
  }

  const toggleDropdown = () => {
    setIsPriorityDropdownOpen(!isPriorityDropdownOpen);
  };

  const handlePriorityPress = () => {
    setIsPriorityDropdownOpen(false);
  };

  const handlePrioritySelect = (option) => {
    setSelectedPriority(option);
    setIsPriorityDropdownOpen(false);
    // After selecting the priority, filter the tickets based on the selected priority
    setSelectedTab(option);
  };

  const handleSelectionConfirm = () => {
    setModalVisible(false);
    if (typeof onSelectionConfirmed === 'function') {
      onSelectionConfirmed(selectedItems);
    }
  };

  const handleItemToggle = (item) => {
    if (selectedItems.includes(item.id)) {
      setSelectedItems(selectedItems.filter((id) => id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item.id]);
    }
  };

  const renderName = ({ item }) => {
    return (
      <View>
        <ScrollView>
          <TouchableOpacity key={item.id} onPress={() => handleItemToggle(item)}>
            <View style={styles.itemContainer}>
              <CheckBox isChecked={selectedItems.includes(item.id)}
                onClick={() => handleItemToggle(item)}
                checkBoxColor="#000000"
                checkedCheckBoxColor="#000000" />
              <Text style={styles.text}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  const toggleDateDropdown = () => {
    setIsDateDropdownOpen(!isDateDropdownOpen);
  };

  const handleToDateConfirm = (date) => {
    if (selectedFromDate && date < new Date(selectedFromDate)) {
      alert("To date cannot be earlier than From date");
      return;
    }
    setSelectedToDate(date.toISOString().split('T')[0]);
    setManualToDate(date.toISOString().split('T')[0]);
    hideDatePicker();
  };

  const showToDatePicker = () => {
    setDatePickerVisible('to');
  };

  const toggleTicketDropdown = () => {
    setModalVisible(!isModalVisible);
  };

  const handleTicketPress = () => {
    setModalVisible(false);
  };

  const handleBackdropPress = () => {
    setIsDateDropdownOpen(false);
  };

  const handleDateSelect = (option) => {
    setSelectedDate(option);
    setIsDateDropdownOpen(false);
    setIsFromDateVisible(false); // Close the From date picker initially
    setIsToDateVisible(false); // Close the To date picker initially
    if (option === 'Today') {
      setSelectedFromDate(new Date().toISOString().split('T')[0]);
      setSelectedToDate(new Date().toISOString().split('T')[0]);
      setSelectedTab('Today'); // Update selectedTab to show tickets for Today
    } else if (option === 'Yesterday') {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      setSelectedFromDate(yesterday.toISOString().split('T')[0]);
      setSelectedToDate(yesterday.toISOString().split('T')[0]);
      setSelectedTab('Yesterday'); // Update selectedTab to show tickets for Yesterday
    } else if (option === 'This week') {
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
      setSelectedFromDate(startOfWeek.toISOString().split('T')[0]);
      setSelectedToDate(endOfWeek.toISOString().split('T')[0]);
      setSelectedTab('This week'); // Update selectedTab to show tickets for This week
    } else if (option === 'Custom date') {
      // If the option is "Custom date", reset the selected dates to empty strings
      setSelectedFromDate('');
      setSelectedToDate('');
      setSelectedTab('All'); // Update selectedTab to show all tickets
      setIsFromDateVisible(true);
      setIsToDateVisible(true);
    }
  };

  const handleManualFromDateInput = () => {
    const dateParts = manualFromDate.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month, day);

    if (!isNaN(date.getTime())) {
      setSelectedFromDate(date);
    }
  };

  const showFromDatePicker = () => {
    setDatePickerVisible('from');
  };

  const handleFromDateConfirm = (date) => {
    if (selectedToDate && date > new Date(selectedToDate)) {
      alert("From date cannot be later than To date");
      return;
    }
    setSelectedFromDate(date.toISOString().split('T')[0]);
    setManualFromDate(date.toISOString().split('T')[0]);
    hideDatePicker();
  };

  const hideDatePicker = () => {
    setDatePickerVisible(null);
  };

  const handleManualToDateInput = () => {
    const dateParts = manualToDate.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month, day);

    if (!isNaN(date.getTime())) {
      setSelectedToDate(date);
    }
  };

  const hideDateModal = () => {
    setIsFromDateVisible(false);
    setIsToDateVisible(false);
  };

  const renderDateSelector = () => {
    if (selectedDate === 'Today') {
      return <Text style={styles.text}>Today's date: {new Date().toISOString().split('T')[0]}</Text>;
    } else if (selectedDate === 'Yesterday') {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return <Text style={styles.text}>Yesterday's date: {yesterday.toISOString().split('T')[0]}</Text>;
    } else if (selectedDate === 'This week') {
      const today = new Date();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      const endOfWeek = new Date(today);
      endOfWeek.setDate(today.getDate() + (6 - today.getDay()));
      return (
        <View>
          <Text style={styles.text}>Start of the week: {startOfWeek.toISOString().split('T')[0]}</Text>
          <Text style={styles.text}>End of the week: {endOfWeek.toISOString().split('T')[0]}</Text>
        </View>
      );
    } else if (selectedDate === 'Custom date') {
      // Render the DateTimePickerModal components for custom date selection
      return (
        <View>
          <Modal visible={isFromDateVisible || isToDateVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer01}>
              <View style={styles.modalContent01}>
                <Text style={styles.text02}>Select From Date</Text>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                  <TextInput
                    style={styles.manualInput}
                    placeholder="Date (YYYY-MM-DD)"
                    placeholderTextColor={'#808080'}
                    value={manualFromDate}
                    onChangeText={setManualFromDate}
                    onBlur={handleManualFromDateInput}></TextInput>
                  <TouchableOpacity style={styles.pickButton} onPress={showFromDatePicker}>
                    <Text style={styles.pickButtonText}>Date</Text>
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible === 'from'}
                  mode="date"
                  onConfirm={handleFromDateConfirm}
                  onCancel={hideDatePicker} />
                <Text style={styles.text02}>Select To Date</Text>
                <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-around' }}>
                  <TextInput
                    style={styles.manualInput}
                    placeholder="Date (YYYY-MM-DD)"
                    placeholderTextColor={'#808080'}
                    value={manualToDate}
                    onChangeText={setManualToDate}
                    onBlur={handleManualToDateInput}></TextInput>
                  <TouchableOpacity style={styles.pickButton} onPress={showToDatePicker}>
                    <Text style={styles.pickButtonText}>Date</Text>
                  </TouchableOpacity>
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible === 'to'}
                  mode="date"
                  onConfirm={handleToDateConfirm}
                  onCancel={hideDatePicker} />
                <TouchableOpacity style={styles.confirmbutton} onPress={hideDateModal}>
                  <Text style={styles.confirmtext}>Confirm</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  };

  const ticketDetails = (ticket) => {
    navigation.navigate('TicketDetails', { ticket });
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
    )
  };

  const getFilteredData = (selectedPriority) => {
    if (selectedPriority === 'All') {
      return ticket;
    }
    return ticket?.filter((item) => item.priority === selectedPriority);
  };

  const renderTabContent = () => {
    const filteredTickets = getFilteredData(selectedPriority || selectedTab);
    return (
      <FlatList scrollEnabled={false}
        data={filteredTickets}
        keyExtractor={(ticket) => ticket.id.toString()}
        renderItem={ticketItem} />
    );
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
          <ImageBackground source={require('../../Assets/Images/background.jpg')} style={styles.background}>
            <Text style={styles.texthead01}>Sparsh</Text>
            <Text style={styles.texthead02}>Say Hello to Hassle-Free HR Query Resolution with sparsh : Your On-Stop Tcking Raising Platform</Text>
          </ImageBackground>

          {/* Create new ticket */}
          <TouchableOpacity style={styles.createbutton} onPress={() => navigation.navigate('ticket')}>
            <Text style={styles.createbuttontext}>Create New Ticket</Text>
          </TouchableOpacity>

          {/* Open and Close Tickets */}
          <View style={styles.tabContainer}>
            <TouchableOpacity style={[styles.tabItem, activeTab === 'Tab1' && styles.activeTab]} onPress={() => handleTabPress('Tab1')}>
              <Text style={styles.tabText}>Open Ticket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabItem, activeTab === 'Tab2' && styles.activeTab]} onPress={() => handleTabPress('Tab2')}>
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
              <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
                <Text style={styles.dropdownButtonText}>Ticket priority : {selectedPriority}</Text>
              </TouchableOpacity>
              <Modal transparent visible={isPriorityDropdownOpen} animationType="fade"
                onRequestClose={() => setIsPriorityDropdownOpen(false)}>
                <TouchableOpacity style={styles.backdrop} onPress={handlePriorityPress}>
                  <View style={styles.modalContainer}>
                    <View style={styles.dropdownList}>
                      {PriorityOptions.map((option, index) => (
                        <TouchableOpacity style={styles.dropdownOption} key={index}
                          onPress={() => handlePrioritySelect(option)}>
                          <Text style={styles.dropdownOptionText}>{option}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                </TouchableOpacity>
              </Modal>

              {/* Select Ticket assign to */}
              <TouchableOpacity style={styles.dropdownButton} onPress={toggleTicketDropdown}>
                <Text style={styles.dropdownButtonText}>Ticket Assigned To </Text>
              </TouchableOpacity>
              <Modal visible={isModalVisible} animationType="slide" transparent={true} onRequestClose={() => setIsPriorityDropdownOpen(false)}>
                <TouchableOpacity style={styles.backdrop} onPress={handleTicketPress}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <FlatList scrollEnabled={true}
                        data={assign}
                        keyExtractor={(item) => item?.jobId?.toString()}
                        renderItem={renderName} />
                      <TouchableOpacity style={styles.confirmbutton} onPress={handleSelectionConfirm}>
                        <Text style={styles.confirmtext}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </Modal>

              {/* Select Start and End date */}
              <TouchableOpacity onPress={toggleDateDropdown} style={styles.dropdownButton}>
                <Text style={styles.dropdownButtonText}>Created Date : {selectedDate}</Text>
              </TouchableOpacity>
              <Modal transparent visible={isDateDropdownOpen} animationType="fade" onRequestClose={() => setIsDateDropdownOpen(false)}>
                <TouchableOpacity style={styles.backdrop} onPress={handleBackdropPress}>
                  <View style={styles.modalContainer}>
                    <View style={styles.dropdownList}>
                      <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDateSelect('Today')}>
                        <Text style={styles.dropdownOptionText}>Today</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDateSelect('Yesterday')}>
                        <Text style={styles.dropdownOptionText}>Yesterday</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDateSelect('This week')}>
                        <Text style={styles.dropdownOptionText}>This week</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDateSelect('Custom date')}>
                        <Text style={styles.dropdownOptionText}>Custom date</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </Modal>
              {/* Render the date selector based on the selectedDate */}
              {selectedDate === 'Custom date' && (
                <View style={styles.dateSelectorContainer}>
                  {renderDateSelector()}
                </View>
              )}

              {/* Search */}
              <View style={styles.view}>
                <Icon name="search" size={15} color="#666" style={styles.searchIcon} />
                <TextInput style={styles.textinput} maxLength={20}
                  placeholder="search with ticket number here.."
                  keyboardType="numeric"
                  placeholderTextColor="#808080" />
              </View>

              {/* Tickets */}
              <View>
                {renderTabContent()}
              </View>
            </View>
          )}
          {activeTab === 'Tab2' && (
            <View>
              <View style={styles.tabview}>
                <Text style={styles.text}>FilterBy</Text>
                <TouchableOpacity onPress={clearFilter}>
                  <Text style={styles.clearfiltertext}>Clear Filter</Text>
                </TouchableOpacity>
              </View>

              {/* Select Ticket priority */}
              <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
                <View style={{flexDirection : 'row', justifyContent:'space-evenly' }}>
                <Text style={styles.dropdownButtonText}>Ticket priority : {selectedPriority}</Text>
                <Icon name="chevron-down" size={15} color="#666" style={styles.searchIcon} />
                </View>
              </TouchableOpacity>
              <Modal transparent visible={isPriorityDropdownOpen} animationType="fade"
                onRequestClose={() => setIsPriorityDropdownOpen(false)}>
                <TouchableOpacity style={styles.backdrop} onPress={handlePriorityPress}>
                  <View style={styles.modalContainer}>
                    <View style={styles.dropdownList}>
                      {PriorityOptions.map((option, index) => (
                        <TouchableOpacity style={styles.dropdownOption} key={index}
                          onPress={() => handlePrioritySelect(option)}>
                          <Text style={styles.dropdownOptionText}>{option}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                </TouchableOpacity>
              </Modal>

              {/* Select Ticket assign to */}
              <TouchableOpacity style={styles.dropdownButton} onPress={toggleTicketDropdown}>
                <Text style={styles.dropdownButtonText}>Ticket Assigned To </Text>
              </TouchableOpacity>
              <Modal visible={isModalVisible} animationType="slide" transparent={true} onRequestClose={() => setIsPriorityDropdownOpen(false)}>
                <TouchableOpacity style={styles.backdrop} onPress={handleTicketPress}>
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <FlatList scrollEnabled={true}
                        data={assign}
                        keyExtractor={(item) => item?.jobId?.toString()}
                        renderItem={renderName} />
                      <TouchableOpacity style={styles.confirmbutton} onPress={handleSelectionConfirm}>
                        <Text style={styles.confirmtext}>Confirm</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </Modal>

              {/* Select Start and End date */}
              <TouchableOpacity onPress={toggleDateDropdown} style={styles.dropdownButton}>
                <Text style={styles.dropdownButtonText}>Created Date : {selectedDate}</Text>
              </TouchableOpacity>
              <Modal transparent visible={isDateDropdownOpen} animationType="fade" onRequestClose={() => setIsDateDropdownOpen(false)}>
                <TouchableOpacity style={styles.backdrop} onPress={handleBackdropPress}>
                  <View style={styles.modalContainer}>
                    <View style={styles.dropdownList}>
                      <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDateSelect('Today')}>
                        <Text style={styles.dropdownOptionText}>Today</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDateSelect('Yesterday')}>
                        <Text style={styles.dropdownOptionText}>Yesterday</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDateSelect('This week')}>
                        <Text style={styles.dropdownOptionText}>This week</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.dropdownOption} onPress={() => handleDateSelect('Custom date')}>
                        <Text style={styles.dropdownOptionText}>Custom date</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </Modal>
              {/* Render the date selector based on the selectedDate */}
              {selectedDate === 'Custom date' && (
                <View style={styles.dateSelectorContainer}>
                  {renderDateSelector()}
                </View>
              )}

              {/* Search */}
              <View style={styles.view}>
                <Icon name="search" size={15} color="#666" style={styles.searchIcon} />
                <TextInput style={styles.textinput} maxLength={20}
                  placeholder="search with ticket number here.."
                  keyboardType="numeric"
                  placeholderTextColor="#808080" />
              </View>

              {/* Tickets */}
              <View>
                {renderTabContent()}
              </View>
            </View>
          )}
          <View style={styles.footer}><Footer /></View>
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
    opacity: 0.5,
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
  text02: {
    color: '#000000',
    fontSize: 15,
    marginTop: '10%',
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
    height: '70%',
  },
  modalContainer01: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent01: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    width: '80%',
    height: '50%',
  },
  dropdownList: {
    backgroundColor: '#fff',
    width: 150,
    borderRadius: 5,
    padding: 10,
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    width: '60%',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: '1%',
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
    marginBottom: '5%',
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
});

export default Sparsh;