import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/index'
import Register from '../screens/Register/index'


let AuthStack = createNativeStackNavigator();


const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}} >
      <AuthStack.Screen name="LOGIN" component={Login} />
      <AuthStack.Screen name="REGISTER" component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
