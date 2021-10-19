import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from '../screens/Contacts/index'
import Settings from '../screens/Settings/index'
import ContactDetails from '../screens/ContactDetails/index'
import CreateContact from '../screens/CreateContact/index'

let HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName='HOME_NAVIGATOR' >
      <HomeStack.Screen name="CONTACT_LIST" component={Contacts} />
      <HomeStack.Screen name="ContactDetail" component={ContactDetails} />
      <HomeStack.Screen name="CREATE_CONTACT" component={CreateContact} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
