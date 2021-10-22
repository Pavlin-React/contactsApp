import React, {useState} from 'react';
import {TextInput, Text} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/input/index';

let Login = () => {
  let [value, onChangeText] = useState('');

  let onPress = () => {};

  return (
    <Container>
      <Input
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="right"
        // error={'This field is required'}
        label="Username"
      />
      <Input
        onChangeText={text => onChangeText(text)}
        value={value}
        label="Password"
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
      <CustomButton
        title="Submit"
        loading={true}
        secondary
        onPress
      />
      <CustomButton title="Click Me" loading secondary onPress />
      <CustomButton
        title="Submit"
        loading={true}
        disabled={true}
        primary
        onPress
      />

      <CustomButton title="Submit" danger onPress />
    </Container>
  );
};

export default Login;
