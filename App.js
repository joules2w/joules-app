import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/components/main/Login/LoginScreen';
import OtpScreen from './src/components/main/Login/OtpScreen';
import Home from './src/components/home/Home';
import Job_PortalScreen from './src/components/main/jobportal/Job_PortalScreen';
import MyReferrals from './src/components/common/My_referrals';
import InterviewPanel from './src/components/main/interviewpanel/InterviewPanel';
import MoreDetails from './src/components/main/interviewpanel/MoreDetails';
import SideMenu from './src/components/common/header/SideMenu';
import ProfileScreen from './src/components/common/header/ProfileScreen';
import AssignPanelMember from './src/components/main/interviewpanel/AssignPanelMember';
import Sparsh from './src/components/main/sparsh/Sparsh';
import Ticket from './src/components/main/sparsh/ticket';
import Other from './src/components/main/Login/Other';
import JobDetails from './src/components/main/jobportal/JobDetails';
import OpenTicket from './src/components/main/sparsh/OpenTicket';
import TicketDetails from './src/components/main/sparsh/TicketDetails';
import TimeandDate from './src/components/main/Login/TimeandDate';
import { Provider } from 'react-redux';
import store from './src/store';
// import { createStore, combineReducers } from 'redux';
// import jobReducer from './';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown : false }} />
        <Stack.Screen name='Otp' component={OtpScreen} options={{ headerShown : false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown : false }} />
        <Stack.Screen name='Job_Portal' component={Job_PortalScreen} options={{ headerShown : false }} />
        <Stack.Screen name='myreferral' component={MyReferrals} options={{ headerShown : false }} />
        <Stack.Screen name='InterviewPanel' component={InterviewPanel} options={{ headerShown : false }} />
        <Stack.Screen name='MoreDetails' component={MoreDetails} options={{ headerShown : false }} />
        <Stack.Screen name='SideMenu' component={SideMenu} options={{ headerShown : false }} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown : false }} />
        <Stack.Screen name='AssignPanelMember' component={AssignPanelMember} options={{ headerShown : false }} />
        <Stack.Screen name='Sparsh' component={Sparsh} options={{ headerShown : false }} />
        <Stack.Screen name='ticket' component={Ticket} options={{ headerShown : false }} />
        <Stack.Screen name="Others" component={Other} options={{ headerShown : false }} />
        <Stack.Screen name='JobDetail' component={JobDetails} options={{ headerShown : false }} />
        <Stack.Screen name='OpenTicket' component={OpenTicket} options={{ headerShown : false }} />
        <Stack.Screen name='TicketDetails' component={TicketDetails} options={{ headerShown : false }} />
        <Stack.Screen name='TimeandDate' component={TimeandDate} options={{ headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
     </Provider>
  );
}

export default App;








































