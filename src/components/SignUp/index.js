import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/input/index';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

let RegisterComponent = ({onChange, onSubmit, errors, form}) => {
  let {navigate} = useNavigation();
  return (
    <Container>
      <Image
        style={styles.imageLogo}
        width={150}
        height={150}
        resizeMode="cover"
        source={require('../../assets/images/wolf.png')}
      />
      <View>
        <Text style={styles.title}>Welcome to the RN Contacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
        <View style={styles.form}>
          <Input
            placeholder="Enter your Username"
            label="Username"
            iconPosition="right"
            error={errors.userName}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />
          <Input
            iconPosition="right"
            error={errors.firstName}
            label="First Name"
            placeholder="Enter your First Name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            iconPosition="right"
            error={errors.lastName}
            label="Last Name"
            placeholder="Enter your Last Name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />
          <Input
            iconPosition="right"
            error={errors.email}
            label="Email"
            placeholder="Enter your Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />
          <Input
            iconPosition="right"
            icon={<Text>SHOW</Text>}
            error={errors.password}
            secureTextEntry
            label="Password"
            placeholder="Enter your Password"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
          <CustomButton  onPress={onSubmit} title="Submit" primary />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate('LOGIN');
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
