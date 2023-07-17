import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Modal, Pressable, Dimensions, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Header from './Header';
import Footer from './Footer';

const Sparsh = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [priority, setPriority] = useState('');
  const [activeTab, setActiveTab] = useState('Tab1');


  const [selected, setSelected] = React.useState([]);
  const data = [
    { key: '1', value: 'name1' },
    { key: '2', value: 'name2' },
    { key: '3', value: 'name3' },
    { key: '4', value: 'name4' },
    { key: '5', value: 'name5' },
  ];

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };



  const [dates, setDates] = React.useState();
  const [open, setOpen] = React.useState(false);

  const onDismiss = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirm = React.useCallback((params) => {
    setOpen(false);
    setDates(params.dates);
    console.log('[on-change-multi]', params);
  }, []);

  const handleSelect = () => {
    Alert.alert('Selected:', selected.join(', '));
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
        <ScrollView>
          <View style={{ flexDirection: 'row', width: '80%' }}>
            <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
          </View>
          <ImageBackground source={require('./Images/background.png')} style={styles.background}>
            <Text style={styles.texthead02}>Sparsh</Text>
            <Text style={styles.texthead05}>
              Say Hello to Hassle-Free HR Query Resolution with sparsh : Your On-Stop Tcking Raising Platform
            </Text>
          </ImageBackground>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ticket')}>
            <Text style={styles.button2}>Create New Ticket</Text>
          </TouchableOpacity>

          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tabItem, activeTab === 'Tab1' && styles.activeTab]}
              onPress={() => handleTabPress('Tab1')}
            >
              <Text style={styles.tabText}>Open Ticket</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabItem, activeTab === 'Tab2' && styles.activeTab]}
              onPress={() => handleTabPress('Tab2')}
            >
              <Text style={styles.tabText}>Close Ticket</Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'Tab1' && (
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}
              >
                <View>
                  <View style={styles.modalView}>
                    <RadioButton.Group onValueChange={value => setPriority(value)} value={priority}>
                      <View style={styles.radioItem}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <RadioButton color="red" value="high" />
                          <Text style={[styles.modalText, { color: 'red' }]}>High Priority</Text>
                        </View>
                      </View>
                      <View style={styles.radioItem}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <RadioButton color="orange" value="medium" />
                          <Text style={[styles.modalText, { color: 'orange' }]}>Medium Priority</Text>
                        </View>
                      </View>
                      <View style={styles.radioItem}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <RadioButton color="#3590ae" value="low" />
                          <Text style={[styles.modalText, { color: '#3590ae' }]}>Low Priority</Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Filter</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={[styles.textStyle, { marginRight: 150 }]}>Ticket Priority</Text>
                  <Icon name="chevron-down" size={15} color="#000" />
                </View>
              </Pressable>
              <MultipleSelectList
                style={styles.text}
                onSelect={() => alert(selected)}
                setSelected={(val) => setSelected(val)}
                placeholder="Tickets assigned to"
                data={data}
                arrowicon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />}
                searchicon={<MaterialIcons name="search" size={24} color="black" />}
                search={true}
                boxStyles={{ borderRadius: 0, width: 300, height: 45, borderRadius: 20, paddingHorizontal: 20, marginLeft: 10 }}
              />

              <View style={{ width: '100%', padding: '2%', color: "black" }}>
                <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                  <Text style={{ color: 'black' }}>Select Dates</Text>
                </Button>
                <DatePickerModal
                  locale="en"
                  mode="multiple"
                  visible={open}
                  onDismiss={onDismiss}
                  dates={dates}
                  onConfirm={onConfirm}
                />
              </View>


              <TextInput
                style={styles.textinput}
                placeholder="search with ticket number here.."
                keyboardType="numeric"
                maxLength={10}
                placeholderTextColor="gray"
              />

              <View style={[styles.card, styles.elevation]}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.texthead5}>High</Text>
                  <Text style={styles.texthead06}>Created on 4 Apirl 2023</Text>
                </View>
                <Text style={styles.heading01}>Testing</Text>
                <Text style={styles.heading02}>Testing</Text>
                <Text style={styles.heading03}>Assigned on 10 Apirl 2023</Text>
                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}></View>
              </View>
            </View>
          )}
          {activeTab === 'Tab2' && (
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}
              >
                <View>
                  <View style={styles.modalView}>
                    <RadioButton.Group onValueChange={value => setPriority(value)} value={priority}>
                      <View style={styles.radioItem}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <RadioButton color="red" value="high" />
                          <Text style={[styles.modalText, { color: 'red' }]}>High Priority</Text>
                        </View>
                      </View>
                      <View style={styles.radioItem}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <RadioButton color="orange" value="medium" />
                          <Text style={[styles.modalText, { color: 'orange' }]}>Medium Priority</Text>
                        </View>
                      </View>
                      <View style={styles.radioItem}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <RadioButton color="#3590ae" value="low" />
                          <Text style={[styles.modalText, { color: '#3590ae' }]}>Low Priority</Text>
                        </View>
                      </View>
                    </RadioButton.Group>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Filter</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={[styles.textStyle, { marginRight: 150 }]}>Ticket Priority</Text>
                  <Icon name="chevron-down" size={15} color="#000" />
                </View>
              </Pressable>
              <MultipleSelectList
                style={styles.text}
                onSelect={() => alert(selected)}
                setSelected={(val) => setSelected(val)}
                label="Tickets assigned to"
                data={data}
                arrowicon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />}
                searchicon={<MaterialIcons name="search" size={24} color="black" />}
                search={true}
                boxStyles={{ borderRadius: 0, width: 300, height: 45, borderRadius: 20, paddingHorizontal: 20, marginLeft: 10 }}
              />

              <View style={{ width: '100%', padding: '2%', color: "black" }}>
                <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
                  <Text style={{ color: 'black' }}>Select Dates</Text>
                </Button>
                <DatePickerModal
                  locale="en"
                  mode="multiple"
                  visible={open}
                  onDismiss={onDismiss}
                  dates={dates}
                  onConfirm={onConfirm}
                />
              </View>




              <TextInput
                style={styles.textinput}
                placeholder="search with ticket number here.."
                keyboardType="numeric"
                maxLength={10}
                placeholderTextColor="gray"
              />

              <View style={[styles.card, styles.elevation]}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.texthead5}>High</Text>
                  <Text style={styles.texthead06}>Created on 4 Apirl 2023</Text>
                </View>
                <Text style={styles.heading01}>Testing</Text>
                <Text style={styles.heading02}>Testing</Text>
                <Text style={styles.heading03}>Assigned on 10 Apirl 2023</Text>
                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}></View>
              </View>
            </View>
          )}

          <Footer />
        </ScrollView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  texthead02: {
    marginLeft: '8%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: '3%',
    marginBottom: '5%',
  },
  texthead05: {
    marginLeft: '8%',
    marginRight: '8%',
    color: 'black',
    fontSize: 16,
    marginBottom: '5%',
    textAlign: 'justify',
  },
  button2: {
    color: 'white',
    marginLeft: '50%',
    marginRight: '8%',
    borderRadius: 10,
    backgroundColor: '#5f9ea0',
    padding: 10,
    textAlign: 'center',
    alignItems: 'flex-end',
  },
  background: {
    height: 150,
    width: Dimensions.get('window').width,
    opacity: 0.35,
  },
  textinput: {
    height: 50,
    width: 250,
    borderWidth: 1,
    color: 'black',
    borderRadius: 12,
    margin: 55,
    marginBottom: 20,
    marginLeft: 20,
  },
  heading01: {
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 8,
    color: 'black',
  },
  heading02: {
    fontSize: 15,
    marginBottom: 13,
    marginLeft: 20,
    color: 'black',
  },
  heading03: {
    fontSize: 10,
    marginBottom: 13,
    marginLeft: 20,
    color: 'black',
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
  texthead5: {
    marginLeft: 10,
    color: '#FF6666',
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#FFEAE9',
  },
  texthead06: {
    marginLeft: 90,
    color: 'black',
    fontSize: 12,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
  },
  shadowOffset: {
    width: 0,
    height: 2,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 260,
  },
  button: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    textAlign: 'left',
  },
  buttonOpen: {
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    height: 54.9,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 15,
    width: 80,
    height: 37.5,
  },
  textStyle: {
    color: 'black',
    paddingHorizontal: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  picker: {
    width: 200,
    height: 44,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
  radioItem: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button3: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginRight: 100,
  },
  buttonText3: {
    marginRight: 5,
    fontWeight: 'bold',
  },

  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#808080',
  },
  activeTab: {
    backgroundColor: '#5f9ea0',
  },
  tabText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: '8%',
  },
  text: {
    color: 'black',
  },
});

export default Sparsh;