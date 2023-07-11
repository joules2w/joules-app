import React, { useState } from "react";
import { View, StyleSheet, FlatList, Pressable, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Header from "./Header";
import Footer from "./Footer";

const Home = ({ navigation }) => {

    const [Jobs, setJobs] = useState([
        { id: 1, title: 'Interactive Developer', description: 'Interactive Developer', skill01 : 'JavaScript', skill02 : 'node.js', experience : '4 Years', location : 'Delhi', salary : '4 to 6', eligibility : 'Interactive developer' },
        { id: 2, title: 'Technical Support Engineer', description: 'bpo', skill01 : 'Excellent Communication Skill Working with US Client', experience : 'Fresher/ Experience Years', location : 'Bangalore', salary : '1.5 to 2.3', eligibility : 'bpo' },
        { id: 3, title: 'Technical Support Engineer', description: 'Excellent understanding of the technical fundamentals of the Internet. You should have a solid knowledge of internet protocols such as SSH, FTP, SFTP & HTTP,The ability to be a good listener, and to really understand a customer problem or question and help them solve it. Excellent writing skills. Most of your work will be written (email, documentation, etc.). Excellent telephone mannerisms. Some support will be provided over the phone (via our VoIP system) 2-3 years previous experience in a technical support role', skill01 : 'Should have  above 65% in acadamic', skill02 : 'Good programming language', experience : 'Fresher / 2 Years', location : 'Bangalore', salary : '1.5 to 5.4', eligibility : 'Helping customers solve technical issues with our widgets. Answering questions from customers and prospective customers about the features and capabilities of our widgets. Developing customer-facing documentation for our website on an as-needed basis. Communicating customer needs and wishes to our development and engineering staff.' },
        { id: 4, title: 'Software Engineer', description: 'The engineer trainee is responsible for managing the data and all the information related to the particular project he/ she is assigned to. The trainee engineer is responsible for completion of all the assigned tasks in the given deadline. All tasks assigned are for the trainees own learning.', skill01: 'Should have above 65% in a', skill02: 'good programming language', experience: '0 Years', location: 'Bangalore', salary: '1.5 to 2 LPA', eligibility : 'The trainee is responsible for reporting to his/ her mentor after the completion of each and every task. The engineer trainee is responsible for preparing a report in how the training has helped him/ her in understanding the dos and don’ts of the sector.' },
        { id: 5, title: 'Peoplesoft FSCM', description: '"Qualifications Basic • Bachelor’s degree or foreign equivalent required from an accredited institution. Will also consider three years of progressive experience in the specialty in lieu of every year of education. • At least 8 years of experience with IT. • At least 7 years of relevant experience. Preferred * At least 7 years of PeopleSoft development experience in PeopleSoft Financial applications. * Strong functional expertise in PeopleSoft Accounts Payable, eProcurement, purchasing & Asset Management modules. Accounts Payables knowledge is must. * Expertise in Application Designer, Application Packages, People Code, Application Engine, Approval Workflow Engine (AWE). * Experience in working on inbound / outbound interfaces is required. * Expertise in Integration tools i.e., Integration Broker, Web services, Component Interface, File Layout is must. * Expertise in Reporting tools i.e., SQR, XML Publisher, PS Query. * Debug and optimize SQL statements within Query, SQR, and Application Engine * Developed conversions, interfaces, extensions, customizations and reports, to address client requirement in accordance with the industry best practices * Experience in creating the Technical Design and Test case documents. * Must have working knowledge of Accounting and financials concepts like VAT, Sales and USE tax etc. * Must have strong communication skills and an ability to communicate at all levels within the organization. * Ability to work in team in diverse/ multiple stakeholder environment * Experience and desire to work in a Global delivery environment "', skill01: 'PeopleSoft FSCM', experience: '5+ Years', location: 'Bangalore', salary: '5 to 10 LPA', eligibility: '"Planning, Communication and Leadership skills necessary. PeopleSoft Project Costing, Asset Management and Grants functional subject matter expertise is required. Ability to review Functional and Technical solutions with Development and Solutions team and provide feedback. Should have service oriented and customer focused approach Experience in offshore/onsite model. Interact with Functional and Technical Team to resolve issues & conflicts as needed. Knowledge of requirement-gathering methodologies and Software Development Lifecycle (SDLC). Commitment to delivering a high quality work product. Knowledge of Project Costing, Asset Management and Grants Modules is desired. "' },
        { id: 6, title: 'Pega development', description: '4+ years of relevant Pega development experience. Overall experience should be 5+ years.CSSA Certification required.', skill01: 'Pega', skill02: 'CSSA Certification', experience: '4+ Years', location: 'Bangalore', salary: '5 to 10 LPA', eligibility: '"• Analyzes business/ functional requirements and ensures adherence to project schedule, tasks, and estimates Active participation in the implementation and delivery of project tasks. Responsible for coding, unit testing, code refactoring, and resolution of defects. Responsible for proper configuration management including source code control, build automation and development of deployment scripts and instructions. Develops, maintains, and executes unit and integration test scenarios (automated or manual) to validate programs/application functionality and integration Creates appropriate documentation in work assignments such as program code, and technical documentation. Gathers information from existing systems, analyzes program and time requirements. "' },
        { id: 7, title: '.Net Developer', description: '"1. Analyzes business/ functional requirements and prepares development project schedule, tasks, and estimates. 2. Leads daily collaboration efforts with project team members to identify issues and risks associated with the design, implementation, and delivery of project assignments. 3. Accountable for design and code reviews, and resolution of defects. 4. Leads development and integration environment setup. 5. Lead configuration management including source code control, build automation and development of deployment scripts and instructions. 6. Provides on-going support to business and content teams managing sites on strategic technology platform. 7. Leads daily collaboration efforts with project team members to identify issues and risks associated with the design, implementation, and delivery of project assignments. 8. Accountable for design and code reviews, and resolution of defects. 9. Leads development and integration environment setup. "', skill01: 'C#', skill02: '  Asp.net', skill03: 'HTML5', skill04: 'wcf', skill05: 'wpf', skill06: 'css3', experience: '7+ Years', location: 'Pune', salary: '8 to 10 LPA', eligibility: '"• Analyzes business/ functional requirements and ensures adherence to project schedule, tasks, and estimates Active participation in the implementation and delivery of project tasks. Responsible for coding, unit testing, code refactoring, and resolution of defects. Responsible for proper configuration management including source code control, build automation and development of deployment scripts and instructions. Develops, maintains, and executes unit and integration test scenarios (automated or manual) to validate programs/application functionality and integration Creates appropriate documentation in work assignments such as program code, and technical documentation. Gathers information from existing systems, analyzes program and time requirements. "' },
      ]);

      const frequentJobPress = (jobs) => {
        navigation.navigate('JobDetail', { jobs });
      };

      const highpayJobPress = (jobs) => {
        navigation.navigate('MoreDetails', { jobs });
      };

      const renderCellContent = (value) => {
        if (value.length > 10) {
          return <Text>{value.substring(0, 78)}...</Text>;
        }
        return <Text>{value}</Text>;
      };


      const frequentJobItem = ({ item }) => (
        <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity onPress={() => frequentJobPress(item)}>
          <Text style={styles.heading01}>{item.title}</Text>
          <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
          <View style={{flexDirection : 'row', width : '50%'}}>
          <Text style={styles.button01}><Text style={styles.text}>{item.skill01}</Text></Text>
          <Text style={styles.button01}><Text style={styles.text}>{item.skill02}</Text></Text>
          </View>
        </TouchableOpacity>
        </View>
      );

      const highpayJobItem = ({ item }) => (
        <View style={[styles.card, styles.elevation]}>
          <Text style={styles.heading01}>{item.title}</Text>
          <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
          <View style={{flexDirection : 'row', width : '50%'}}>
          <Text style={styles.button01}><Text style={styles.text}>{item.skill01}</Text></Text>
          <Text style={styles.button01}><Text style={styles.text}>{item.skill02}</Text></Text>
          </View>
          <TouchableOpacity onPress={() => highpayJobPress(item)}>
            <Text style={styles.moredetails}>More details ➤</Text>
          </TouchableOpacity>
        </View>
      );

      const [modalVisible, setModalVisible] = useState(false);

      const [activeTab, setActiveTab] = useState('Tab1');

      const handleTabPress = (tabName) => {
        setActiveTab(tabName);
      };

      const data = [
        {key:'1', value:'name1'},
        {key:'2', value:'name2'},
        {key:'3', value:'name3'},
        {key:'4', value:'name4'},
        {key:'5', value:'name5'},
    ]

    



    const logout = () =>{
        navigation.navigate('Login')
        }
    
        const interviewpanel = () =>{
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
        <View style = {styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.view01}>
                <Header logout={logout} interviewpanel={interviewpanel} jobportal={jobportal} home={home} sparsh={sparsh} />
                </View>
                <Text style={styles.texthead01}>Top 6 High Paying Panel Member Jobs</Text>
                <Text style={styles.texthead02}>If you're looking to apply for a job, it's important to know which jobs are in high demand and frequently applied for. Here are the top 6 frequently applied jobs that you might want to consider:</Text>

                <FlatList scrollEnabled = {false} 
                    data={Jobs} 
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={frequentJobItem} />
                
                <View style={styles.line} />

                <Text style={styles.texthead01}>Top 6 Frequently Applied Jobs</Text>
                <Text style={styles.texthead02}>Are you interested in getting paid for your opinions and expertise? Consider becoming a panel member in one of these high-paying industries.</Text>

                <FlatList scrollEnabled = {false} 
                    data={Jobs} 
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={highpayJobItem} />


                <View style={styles.tabContainer}>
                        <TouchableOpacity
                        style={[styles.tabItem, activeTab === 'Tab1' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab1')}
                        >
                        <Text style={styles.tabText}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[styles.tabItem, activeTab === 'Tab2' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab2')}
                        >
                        <Text style={styles.tabText}>Low</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[styles.tabItem, activeTab === 'Tab3' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab3')}
                        >
                        <Text style={styles.tabText}>Medium</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={[styles.tabItem, activeTab === 'Tab4' && styles.activeTab]}
                        onPress={() => handleTabPress('Tab4')}
                        >
                        <Text style={styles.tabText}>High</Text>
                        </TouchableOpacity>
                    </View>

                    {activeTab === 'Tab1' && (
                        <View>
                            <View style={[styles.card, styles.elevation]}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent : 'space-between' }}>
                            <Text style={styles.priority}>
                            <Text style={styles.texthead03}>High</Text>
                            </Text>
                            <Text style={styles.heading02}>
                                Created on 4 Apirl 2023
                            </Text>
                            </View>
                            <Text style={styles.text01}>Testing</Text>
                            <Text style={styles.text02}>Testing</Text>
                            <Text style={styles.text03}>Assigned on 10 Apirl 2023</Text>
                        </View>
                        </View>
                        </View>
                    )}
                    {activeTab === 'Tab2' && (
                        <View>
                        <Text style={styles.text}>Content for Tab 2</Text>
                        </View>
                    )}
                    {activeTab === 'Tab3' && (
                        <View>
                        <Text style={styles.text}>Content for Tab 3</Text>
                        </View>
                    )}
                    {activeTab === 'Tab4' && (
                        <View>
                        <Text style={styles.text}>Content for Tab 4</Text>
                        </View>
                    )}
                <View style={styles.footer}>
                <Footer />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignContent : 'center',
        backgroundColor : '#fff',
    },
    view01 : {
        flexDirection : 'row', 
        width : '80%'
    },
    texthead01 : {
        color : 'black',
        fontSize : 25,
        textAlign : 'left',
        marginLeft : '5%',
        marginTop : 10,
        marginRight : '5%',
    },
    texthead02 : {
        color : 'black',
        fontSize : 16,
        marginLeft : '5%',
        marginRight : '5%',
        marginBottom : '8%',
        textAlign : "justify",
    },
    footer : {
        position : 'absolute',
        bottom : 0,
        left : 0,
        right : 0,
        justifyContent : 'center',
        alignItems : 'center',
        textAlign : 'justify',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 120,
    },
    heading01 : {  
        fontSize: 18,  
        fontWeight: "bold", 
        marginLeft : '5%', 
        marginRight : '5%',
        color : 'black',
        padding : 5,
    },  
    heading02 : {  
        fontSize: 14,  
        marginLeft : '5%', 
        color : '#808080',
        textAlign : 'justify',
        marginRight : '5%',
        padding : 5,
    },
    card: {  
        backgroundColor: '#fff',  
        borderRadius: 10,
        borderColor : 'black',
        padding : 5, 
        marginLeft : '5%',
        marginRight : '5%',
        marginBottom : '5%',
    },  
    elevation: {  
        shadowColor: 'black',  
        elevation: 3,  
    },
    button01 : {
        backgroundColor : 'lightblue',
        borderRadius : 8,
        paddingVertical : 5,
        margin : '8%',
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
        color : 'green',
        margin : '5%',
    },
    line : {
        borderColor : 'black',
        borderBottomWidth : 1,
        marginLeft : '8%',
        marginRight : '8%',
    },
    moredetails : {
        color : 'red',
        textAlign : 'right',
        marginRight : '3%',
        textDecorationLine : 'underline',
        fontSize : 15
    },
    button : {
        backgroundColor : '#5f9ea0',
        marginRight : '8%',
        padding : 10,
        borderRadius : 5,
        alignSelf : 'flex-end',
    },
    buttontext : {
        color : '#fff',
        fontWeight : "bold",
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding : 5,
        backgroundColor: '#808080',
        marginLeft : '4%',
        marginRight : '4%',
        borderRadius : 5
    },
    activeTab: {
        backgroundColor: '#5f9ea0',
    },
    tabText: {
        fontSize: 16,
        fontWeight: "bold",
        color : '#fff',
    },
    priority : {
        backgroundColor : '#E0E0E0',
        borderRadius : 10,
        marginLeft : '5%',
        padding : 5,
    },
    texthead03 : {
        fontSize : 20,
        color : 'black',
    },
    text01 : {
        color : 'black',
        fontSize : 25,
        fontWeight : "bold",
        marginLeft : '5%',
        textAlign : 'left'
    },
    text02 : {
        color : 'black',
        fontSize : 16,
        marginLeft : '5%',
        textAlign : 'left'
    },
    text03 : {
        color : 'black',
        fontSize : 15,
        marginLeft : '5%',
        textAlign : 'left'
    }
})

export default Home;