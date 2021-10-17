import React from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import AppNavContainer from './src/navigations';

const App = () => {
  return (
    <SafeAreaView>
      <AppNavContainer />
    </SafeAreaView>
  );
};

export default App;
