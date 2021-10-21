import React, {useState} from 'react';
import {TextInput, Text} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/input/index';

let Login = () => {
  let [value, onChangeText] = useState('');

  return (
    <Container>
      <Input
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition='right'
        // error={'This field is required'}
        icon={<Text>HIDE</Text>}
        label='Username'
      />
      <Input
        onChangeText={text => onChangeText(text)}
        value={value}
        label='Password'
        icon={<Text>HIDE</Text>}
        iconPosition='right'
      />
    </Container>
  );
};

export default Login;
