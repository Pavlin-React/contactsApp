import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {

  let isLoggedIn = true

  return (
      <NavigationContainer>
        {isLoggedIn ? <HomeNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
  );
};

export default AppNavContainer;
