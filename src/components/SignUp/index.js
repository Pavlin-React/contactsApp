import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/input/index';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

let RegisterComponent = () => {
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
            label="Password"
            secureTextEntry
            iconPosition="right"
          />
          <Input
            iconPosition="right"
            // error={'This field is required'}
            label="First Name"
            placeholder="Enter your First Name"
          />
          <Input
            iconPosition="right"
            // error={'This field is required'}
            label="Last Name"
            placeholder="Enter your Last Name"
          />
          <Input
            iconPosition="right"
            // error={'This field is required'}
            label="Email"
            placeholder="Enter your Email"
          />
          <Input
            iconPosition="right"
            icon={<Text>SHOW</Text>}
            // error={'This field is required'}
            label="Password"
            placeholder="Enter your Password"
          />
          <CustomButton title="Submit" primary />
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
