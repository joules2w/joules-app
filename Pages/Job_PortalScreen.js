import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, FlatList, ScrollView, ImageBackground, Dimensions} from 'react-native';

import Header from './Header';
import Footer from './Footer';
import MenuBar from './SideMenu';
import FilterBy from './Filter';
import SearchBox from './SearchBox';

const Job_portal = ({ navigation }) => {


    const [Jobs, setJobs] = useState([
        { id: 1, title: 'Interactive Developer', description: 'Interactive Developer', skill01 : 'JavaScript', skill02 : 'node.js', experience : '4 Years', location : 'Delhi', salary : '4 to 6', eligibility : 'Interactive developer' },
        { id: 2, title: 'Technical Support Engineer', description: 'bpo', skill01 : 'Excellent Communication Skill Working with US Client', experience : 'Fresher/ Experience Years', location : 'Bangalore', salary : '1.5 to 2.3', eligibility : 'bpo' },
        { id: 3, title: 'Technical Support Engineer', description: 'Excellent understanding of the technical fundamentals of the Internet. You should have a solid knowledge of internet protocols such as SSH, FTP, SFTP & HTTP,The ability to be a good listener, and to really understand a customer problem or question and help them solve it. Excellent writing skills. Most of your work will be written (email, documentation, etc.). Excellent telephone mannerisms. Some support will be provided over the phone (via our VoIP system) 2-3 years previous experience in a technical support role', skill01 : 'Should have  above 65% in acadamic', skill02 : 'Good programming language', experience : 'Fresher / 2 Years', location : 'Bangalore', salary : '1.5 to 5.4', eligibility : 'Helping customers solve technical issues with our widgets. Answering questions from customers and prospective customers about the features and capabilities of our widgets. Developing customer-facing documentation for our website on an as-needed basis. Communicating customer needs and wishes to our development and engineering staff.' },
        { id: 4, title: 'Software Engineer', description: 'The engineer trainee is responsible for managing the data and all the information related to the particular project he/ she is assigned to. The trainee engineer is responsible for completion of all the assigned tasks in the given deadline. All tasks assigned are for the trainees own learning.', skill01: 'Should have above 65% in a', skill02: 'good programming language', experience: '0 Years', location: 'Bangalore', salary: '1.5 to 2 LPA', eligibility : 'The trainee is responsible for reporting to his/ her mentor after the completion of each and every task. The engineer trainee is responsible for preparing a report in how the training has helped him/ her in understanding the dos and don’ts of the sector.' },
        { id: 5, title: 'Peoplesoft FSCM', description: '"Qualifications Basic • Bachelor’s degree or foreign equivalent required from an accredited institution. Will also consider three years of progressive experience in the specialty in lieu of every year of education. • At least 8 years of experience with IT. • At least 7 years of relevant experience. Preferred * At least 7 years of PeopleSoft development experience in PeopleSoft Financial applications. * Strong functional expertise in PeopleSoft Accounts Payable, eProcurement, purchasing & Asset Management modules. Accounts Payables knowledge is must. * Expertise in Application Designer, Application Packages, People Code, Application Engine, Approval Workflow Engine (AWE). * Experience in working on inbound / outbound interfaces is required. * Expertise in Integration tools i.e., Integration Broker, Web services, Component Interface, File Layout is must. * Expertise in Reporting tools i.e., SQR, XML Publisher, PS Query. * Debug and optimize SQL statements within Query, SQR, and Application Engine * Developed conversions, interfaces, extensions, customizations and reports, to address client requirement in accordance with the industry best practices * Experience in creating the Technical Design and Test case documents. * Must have working knowledge of Accounting and financials concepts like VAT, Sales and USE tax etc. * Must have strong communication skills and an ability to communicate at all levels within the organization. * Ability to work in team in diverse/ multiple stakeholder environment * Experience and desire to work in a Global delivery environment "', skill01: 'PeopleSoft FSCM', experience: '5+ Years', location: 'Bangalore', salary: '5 to 10 LPA', eligibility: '"Planning, Communication and Leadership skills necessary. PeopleSoft Project Costing, Asset Management and Grants functional subject matter expertise is required. Ability to review Functional and Technical solutions with Development and Solutions team and provide feedback. Should have service oriented and customer focused approach Experience in offshore/onsite model. Interact with Functional and Technical Team to resolve issues & conflicts as needed. Knowledge of requirement-gathering methodologies and Software Development Lifecycle (SDLC). Commitment to delivering a high quality work product. Knowledge of Project Costing, Asset Management and Grants Modules is desired. "' },
        { id: 6, title: 'Pega development', description: '4+ years of relevant Pega development experience. Overall experience should be 5+ years.CSSA Certification required.', skill01: 'Pega', skill02: 'CSSA Certification', experience: '4+ Years', location: 'Bangalore', salary: '5 to 10 LPA', eligibility: '"• Analyzes business/ functional requirements and ensures adherence to project schedule, tasks, and estimates Active participation in the implementation and delivery of project tasks. Responsible for coding, unit testing, code refactoring, and resolution of defects. Responsible for proper configuration management including source code control, build automation and development of deployment scripts and instructions. Develops, maintains, and executes unit and integration test scenarios (automated or manual) to validate programs/application functionality and integration Creates appropriate documentation in work assignments such as program code, and technical documentation. Gathers information from existing systems, analyzes program and time requirements. "' },
        { id: 7, title: '.Net Developer', description: '"1. Analyzes business/ functional requirements and prepares development project schedule, tasks, and estimates. 2. Leads daily collaboration efforts with project team members to identify issues and risks associated with the design, implementation, and delivery of project assignments. 3. Accountable for design and code reviews, and resolution of defects. 4. Leads development and integration environment setup. 5. Lead configuration management including source code control, build automation and development of deployment scripts and instructions. 6. Provides on-going support to business and content teams managing sites on strategic technology platform. 7. Leads daily collaboration efforts with project team members to identify issues and risks associated with the design, implementation, and delivery of project assignments. 8. Accountable for design and code reviews, and resolution of defects. 9. Leads development and integration environment setup. "', skill01: 'C#', skill02: '  Asp.net', skill03: 'HTML5', skill04: 'wcf', skill05: 'wpf', skill06: 'css3', experience: '7+ Years', location: 'Pune', salary: '8 to 10 LPA', eligibility: '"• Analyzes business/ functional requirements and ensures adherence to project schedule, tasks, and estimates Active participation in the implementation and delivery of project tasks. Responsible for coding, unit testing, code refactoring, and resolution of defects. Responsible for proper configuration management including source code control, build automation and development of deployment scripts and instructions. Develops, maintains, and executes unit and integration test scenarios (automated or manual) to validate programs/application functionality and integration Creates appropriate documentation in work assignments such as program code, and technical documentation. Gathers information from existing systems, analyzes program and time requirements. "' },
      ]);
    
      const handleJobPress = (jobs) => {
        navigation.navigate('JobDetail', { jobs });
      };

      const renderCellContent = (value) => {
        if (value.length > 10) {
          return <Text>{value.substring(0, 78)}...</Text>;
        }
        return <Text>{value}</Text>;
      };
    
      const renderJobItem = ({ item }) => (
        <View style={[styles.card, styles.elevation]}>
        <TouchableOpacity
          style={styles.jobdItem}
          onPress={() => handleJobPress(item)}
        >
          <Text style={styles.heading01}>{item.title}</Text>
          <Text style={styles.heading02}>{renderCellContent(item.description)}</Text>
          <View style={{flexDirection : 'row', width : '60%', justifyContent : 'flex-start'}}>
          <Text style={styles.button01}><Text style={styles.text}>{item.skill01}</Text></Text>
          <Text style={styles.button01}><Text style={styles.text}>{item.skill02}</Text></Text>
          </View>
        </TouchableOpacity>
        </View>
      );


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

    return (
    <View style={styles.container}>
        <ScrollView>
            <View>
                <View style={{flexDirection : 'row', width : '80%'}}>
                <MenuBar interviewpanel={interviewpanel} home={jobportal} sparsh={sparsh} />
                <Header logout={logout} />
                </View>
            <ImageBackground style = {styles.background} source = {require('./Images/background.png')}>
                <Text style={styles.texthead01}>Job Portal</Text>
                <Text style={styles.texthead02}>Uncover the Best Career Opportunities with the Best Jobs in the Market</Text>
            </ImageBackground>
            <TouchableOpacity onPress={() => navigation.navigate('myreferral')}>
                <Text style={styles.text01}>My Referrals</Text>
            </TouchableOpacity>

            <View style={{flexDirection : 'row', width : '100%', justifyContent : 'center', marginRight : '10%'}}>
            <SearchBox />
            <FilterBy />
            </View>
            
            </View>

            <FlatList scrollEnabled = {false} 
            data={Jobs} 
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderJobItem} />

            <Footer />
        </ScrollView>
    </View>
    );
}

const styles =  StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        alignItems : 'center',
    },

    text02 : {
        color : 'black',
        marginLeft : 40,
        marginTop : 40,
        fontSize : 20,
    },
    background : {
        height : 150,
        width : Dimensions.get('window').width,
        opacity : 0.5,
    },
    text01 : {
        color : 'red',
        marginBottom : '2%',
        textAlign : 'right',
        marginRight : 5,
        fontSize : 15,
        textDecorationLine : 'underline',
    },
    texthead01 : {
        color : 'black',
        fontSize : 30,
        textAlign : 'left',
        marginLeft : '8%',
        marginTop : 10,
    },
    texthead02 : {
        color : 'black',
        fontSize : 18,
        textAlign : 'left',
        marginLeft : '8%',
        marginRight : '8%',
    },
    textinput01 : {
        borderWidth : 1,
        borderColor : 'black',
        marginLeft : 20,
        marginRight : 70,
        borderRadius : 5,
        marginBottom : 30,
    },
    text : {
        color : 'green',
    },
    icon : {
        marginRight : 10,
    },
    heading01 : {  
        fontSize: 18,  
        fontWeight: '600', 
        marginLeft : '8%', 
        marginBottom: '4%', 
        color : 'black',
    },  
    heading02 : {  
        fontSize: 15,  
        fontWeight: '600',  
        marginBottom: '5%', 
        marginLeft : '8%', 
        color : 'gray',
        textAlign : 'justify',
        marginRight : '8%',
    },
    card: {  
        backgroundColor: 'white',  
        borderRadius: 10,
        borderColor : 'black', 
        paddingVertical: 10,  
        paddingHorizontal: 10,  
        marginLeft : '8%',
        marginRight : '8%',
        marginBottom : '8%',
    },  
    elevation: {  
        shadowColor: 'black',  
        elevation: 10,  
    },
    button01 : {
        backgroundColor : 'lightblue',
        marginLeft : '10%',
        borderRadius : 10,
        padding : 5,
    },
    button02 : {
        backgroundColor : 'lightblue',
        marginLeft : '10%',
        marginBottom : '5%',
        borderRadius : 10,
        paddingHorizontal : 10,
        paddingVertical : 3,
    },
})

export default Job_portal;