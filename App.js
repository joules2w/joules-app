import React from 'react'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/Container/Login/LoginScreen'
import OtpScreen from './src/Container/Otp/OtpScreen';
import Home from './src/Container/Home/Home';
import Job_PortalScreen from './src/Container/JobPortal/Job_PortalScreen';
import JobDetails from './src/Container/JobPortal/JobDetails';
import InterviewPanel from './src/Container/InterviewPanel/InterviewPanel';
import MoreDetails from './src/Container/InterviewPanel/MoreDetails/MoreDetails';
import MyReferrals from './src/components/My_referrals';
import Sparsh from './src/Container/Sparsh/Sparsh';
import Ticket from './src/Container/Sparsh/Createticket';
import TicketDetails from './src/Container/Sparsh/TicketDetails';
import store from './src/redux/store';

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
        <Stack.Screen name='JobDetail' component={JobDetails} options={{ headerShown : false }} />
        <Stack.Screen name='InterviewPanel' component={InterviewPanel} options={{ headerShown : false }} />
        <Stack.Screen name='MoreDetails' component={MoreDetails} options={{ headerShown : false }} />
        <Stack.Screen name='myreferral' component={MyReferrals} options={{ headerShown : false }} />
        <Stack.Screen name='Sparsh' component={Sparsh} options={{ headerShown : false }} />
        <Stack.Screen name='ticket' component={Ticket} options={{ headerShown : false }} />
        <Stack.Screen name='TicketDetails' component={TicketDetails} options={{ headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;