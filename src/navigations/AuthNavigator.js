import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

let AuthStack = createNativeStackNavigator();

let Login = () => {
  return(
    <View>
      <Text>Login</Text>
    </View>
  )
}
let SignUp = () => {
  return(
    <View>
      <Text>SignUp</Text>
    </View>
  )
}

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
