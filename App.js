import React from 'react'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/components/Main/Login/LoginScreen';
import OtpScreen from './src/components/Main/Otp/OtpScreen';
import Home from './src/components/Main/Home/Home';
import Job_PortalScreen from './src/components/Main/JobPortal/Job_PortalScreen';
import JobDetails from './src/components/Main/JobPortal/JobDetails';
import InterviewPanel from './src/components/Main/InterviewPanel/InterviewPanel';
import MoreDetails from './src/components/Main/InterviewPanel/MoreDetails/MoreDetails';
import AssignPanelMember from './src/components/Main/InterviewPanel/MoreDetails/AssignPanelMember';
import MyReferrals from './src/components/common/My_referrals';
import Sparsh from './src/components/Main/Sparsh/Sparsh';
import Ticket from './src/components/Main/Sparsh/Createticket';
import TicketDetails from './src/components/Main/Sparsh/TicketDetails';
import SideMenu from './src/components/common/Header/SideMenu';
import ProfileScreen from './src/components/common/Header/ProfileScreen';
import store from './store';
import HomeScreen from './Pages/HomeScreen';

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
        <Stack.Screen name='AssignPanelMember' component={AssignPanelMember} options={{ headerShown : false }} />
        <Stack.Screen name='myreferral' component={MyReferrals} options={{ headerShown : false }} />
        <Stack.Screen name='Sparsh' component={Sparsh} options={{ headerShown : false }} />
        <Stack.Screen name='ticket' component={Ticket} options={{ headerShown : false }} />
        <Stack.Screen name='TicketDetails' component={TicketDetails} options={{ headerShown : false }} />
        <Stack.Screen name='SideMenu' component={SideMenu} options={{ headerShown : false }} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown : false }} />
        <Stack.Screen name='Details' component={HomeScreen} options={{ headerShown : false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;


// import React from "react";
// import { View } from 'react-native';

// import Main from './src/components/Main/Main';

// const App = () => {
//   return (
//     <View>
//       <Main />
//     </View>
//   );
// }

// export default App;