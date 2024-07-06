import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './pages/LoginPage';
import ForgetPassword from './pages/ForgetPassword';
import VisualSearch from './pages/VisualSearch';
import Masuk from './pages/Masuk';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={SignUp} />
      <Tab.Screen name="Settings" component={LoginPage} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Masuk">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="Masuk" component={Masuk} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="VisualSearch" component={VisualSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;