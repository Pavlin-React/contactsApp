import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

let HomeStack = createNativeStackNavigator();

let Contacts = () => {
  return(
    <View>
      <Text>Contacts</Text>
    </View>
  )
}
let ContactDetail = () => {
  return(
    <View>
      <Text>ContactDetail</Text>
    </View>
  )
}
let CreateContact = () => {
  return(
    <View>
      <Text>CreateContact</Text>
    </View>
  )
}
let Settings = () => {
  return(
    <View>
      <Text>Settings</Text>
    </View>
  )
}

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Contacts" component={Contacts} />
      <HomeStack.Screen name="ContactDetail" component={ContactDetail} />
      <HomeStack.Screen name="CreateContact" component={CreateContact} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
