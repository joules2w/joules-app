import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Login/LoginScreen';
import OtpScreen from './Otp/OtpScreen';
import Home from './Home/Home';
import Job_PortalScreen from './JobPortal/Job_PortalScreen';
import JobDetails from './JobPortal/JobDetails';
import MyReferrals from '../common/My_referrals';
import InterviewPanel from './InterviewPanel/InterviewPanel';
import MoreDetails from './InterviewPanel/MoreDetails/MoreDetails';
import SideMenu from '../common/Header/SideMenu';
import ProfileScreen from '../common/Header/ProfileScreen';
import AssignPanelMember from './InterviewPanel/MoreDetails/AssignPanelMember';
import Sparsh from './Sparsh/Sparsh';
import Ticket from './Sparsh/Createticket';
import TicketDetails from './Sparsh/TicketDetails';
import HomeScreen from '../../../Pages/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
        <Stack.Screen name='JobDetail' component={JobDetails} options={{ headerShown : false }} />
        <Stack.Screen name='TicketDetails' component={TicketDetails} options={{ headerShown : false }} />
        <Stack.Screen name='Details' component={HomeScreen} options={{ headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


