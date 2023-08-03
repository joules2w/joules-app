import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './Pages/LoginScreen';
import OtpScreen from './Pages/OtpScreen';
import Home from './Pages/Home';
import Job_PortalScreen from './Pages/Job_PortalScreen';
import MyReferrals from './Pages/My_referrals';
import InterviewPanel from './Pages/InterviewPanel';
import MoreDetails from './Pages/MoreDetails';
import SideMenu from './Pages/SideMenu';
import ProfileScreen from './Pages/ProfileScreen';
import AssignPanelMember from './Pages/AssignPanelMember';
import Sparsh from './Pages/Sparsh';
import Ticket from './Pages/Createticket';
import Other from './Pages/Other';
import JobDetails from './Pages/JobDetails';
import TicketDetails from './Pages/TicketDetails';
import HomeScreen from './Pages/HomeScreen';
import Extra from './Pages/Extra';

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
        <Stack.Screen name="Other" component={Other} options={{ headerShown : false }} />
        <Stack.Screen name='JobDetail' component={JobDetails} options={{ headerShown : false }} />
        <Stack.Screen name='TicketDetails' component={TicketDetails} options={{ headerShown : false }} />
        <Stack.Screen name='Details' component={HomeScreen} options={{ headerShown : false }} />
        <Stack.Screen name='Extra' component={Extra} options={{ headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


