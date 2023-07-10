import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Modal, Pressable,  useWindowDimensions , Picker, SafeAreaView, TouchableHighlight, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { AntDesign } from '@expo/vector-icons'; // for Instagram icon
import { Feather } from '@expo/vector-icons';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import { SelectList } from 'react-native-dropdown-select-list'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FaSearch } from 'react-icons/fa';
import { IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TouchableWithoutFeedback} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from './Header';
import Footer from './Footer';
import SideMenu from './SideMenu';

const Sparsh = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [priority, setPriority] = useState('');


  const [selected, setSelected] = React.useState([]);
  
  const data = [
      {key:'1', value:'name1'},
      {key:'2', value:'name2'},
      {key:'3', value:'name3'},
      {key:'4', value:'name4'},
      {key:'5', value:'name5'},
  ]
  const [value, onChange] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleSelect = (values) => {
    setSelected(values);
  };

  const FirstRoute = () => (
    <View style={{flexDirection : 'row', width : 70}}  />
    
  );
  
  const SecondRoute = () => (
    <View  style={{flexDirection : 'row', width : 70}} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Open Ticket' },
    { key: 'second', title: 'Closed Ticket' },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flexDirection : 'row', width : '80%' }}>
          <SideMenu />
        <Header />
        </View>
        <ImageBackground
          source={require('./Images/background.png')}
          style={styles.backgroundImage}
        >
          <Text style={styles.texthead02}>Sparsh</Text>
          <Text style={styles.texthead05}>
            Say Hello to Hassle-Free HR Query Resolution with sparsh : Your On-Stop Tcking Raising Platform
          </Text>
        </ImageBackground>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ticket')}>
      <Text style={styles.button2}>Create New Ticket</Text>
    </TouchableOpacity>
                  
              
  <TabView
  navigationState={{ index, routes }}
  onIndexChange={setIndex}
  renderScene={SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  })}
/>
                  
                  
<View style={styles.centeredView}>
<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView} >
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

                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Filter</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
              <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)} >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={[styles.textStyle, { marginRight: 150 }]}>Ticket Priority</Text>
                <Icon name='chevron-down' size={15} color='#000' />
              </View>
              </Pressable>
            </View>

                 
                          <MultipleSelectList 
                            onSelect={() => alert(selected)}
                            setSelected={(val) => setSelected(val)} 
                            label="Tickets assigned to" 
                            data={data}  
                            arrowicon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />}
                            searchicon={<MaterialIcons name="search" size={24} color="black" />} 
                            search={true} 
                            boxStyles={{borderRadius:0, width: 300, height: 45, borderRadius: 20,paddingHorizontal:20, marginLeft:10}}
                          />
                          
                          <View><TouchableOpacity style={styles.button3} onPress={showDatePicker}>
                            <Text style={[styles.buttonText3, { marginRight: 100 } ] }>Select Date and Time</Text>
                            <Icon name='chevron-down' size={15} color='#000' />
                          </TouchableOpacity>
                          {/* {[styles.textStyle, { marginRight: 28 }]} */}

                          <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleDateConfirm}
                            onCancel={hideDatePicker}
                          /></View>
                          
                           

            <TextInput
              style={styles.textinput}
              placeholder='search with ticket number here..'
              keyboardType='numeric'
              maxLength={10}
              placeholderTextColor='gray'
            />
        <View style={[styles.card, styles.elevation]}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.texthead5}>
                High
              </Text>
              <Text style={styles.texthead06}>
                Created on 4 Apirl 2023
              </Text>
            </View>
            <Text style={styles.heading01}>Testing</Text>
            <Text style={styles.heading02}>Testing</Text>
            <Text style={styles.heading03}>Assigned on 10 Apirl 2023</Text>
            <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-around' }}>
            </View>
          </View>
        </View>
        
        <Footer />        
      </ScrollView>
    </View>
  );
}




const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'white',
  },
  texthead02 : {
    marginLeft : 10,
    color:'black',
    fontSize :18 ,
    fontWeight : '800',
    marginBottom: 5, 
  },
  texthead05 : {
    marginLeft : 10,
    color:'black',
    fontSize : 16,
    fontWeight:10,
    marginBottom : 20, 
  },
  image1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  button2 : {
    color : 'white',
    marginLeft : 150,
    borderRadius : 10,
    backgroundColor :'#87CEEB',
    padding : 10,
    fontWeight: 'bold',
    textAlign : 'center',
    alignItems: 'flex-end',
  },
  image : {
    height : 100,
    width : 100,
    marginRight : 15,
    marginBottom : 12,
  },
  backgroundImage : {
    opacity:0.5,
    marginBottom : 13,
  },
  image1 : {
    height : 20,
    width : 20,
    marginLeft : 200,
    flexDirection: 'row',
  },
  textinput : {
    height :50,
    width : 250,
    borderWidth : 1,
    color : 'black',
    borderRadius:12,
    margin:55,
    marginBottom : 20,
    marginLeft : 20,
  },
  heading01 : {  
    fontSize: 18,  
    fontWeight: '800', 
    marginLeft : 20, 
    marginBottom: 8, 
    color : 'black',
},  
heading02 : {  
    fontSize: 15,  
    fontWeight: '60',  
    marginBottom: 13, 
    marginLeft : 20, 
    color : 'black',
},
heading03 : {  
  fontSize: 10,  
  fontWeight: '600',  
  marginBottom: 13, 
  marginLeft : 20, 
  color : 'black',
},
  card: {  
    backgroundColor: 'white',  
    borderRadius: 10,
    borderColor : 'black', 
    paddingVertical: 10,  
    paddingHorizontal: 10,  
    width: '100%',
    marginLeft : 10,
    marginRight : 25,
    width : 300,
    marginBottom : 20,
},  
elevation: {  
    shadowColor: 'black',  
    elevation: 10,  
},
texthead5 : {
  marginLeft : 10,
  color:'#FF6666',
  paddingHorizontal : 10,
  borderRadius : 8,
  fontSize : 16,
  fontWeight:10,
  backgroundColor: '#FFEAE9'
},
texthead06 : {
  marginLeft : 110,
  color:'black',
  fontSize : 12,
  fontWeight:10,
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
    marginVertical:260,    
  },
  button: {
    marginBottom : 10,
    padding: 10,
    borderRadius : 10,
    textAlign : 'left',
  },
  buttonOpen: {
    backgroundColor: '#d3d3d3',
    borderRadius : 20,
    height:54.9,
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius :15 ,
    width: 80,
    height: 37.5,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal:10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  picker: {
    width: 200,
    height: 44,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  radioItem : {
    flexDirection:'row',
    marginTop: 10,
  },
  button3: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#d3d3d3',
    borderRadius: 12.5,
    marginHorizontal:10,
    flexDirection: 'row',
    height:54.9,
    alignItems: 'center'
  },
  buttonText3: {
    color: 'black',
    fontSize: 16,
    fontWeight: '30',
    textAlign: 'center',
  },
});

export default Sparsh;
