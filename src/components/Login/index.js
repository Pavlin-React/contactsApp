import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/CustomButton';
import Input from '../../components/input/index';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

let Index = () => {

  let {navigate} = useNavigation()
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
        <Text style={styles.subTitle}>Plese login here</Text>
        <View style={styles.form} >
          <Input
            iconPosition="right"
            // error={'This field is required'}
            label="Username"
            placeholder="Enter your Username"
          />
          <Input
            placeholder="Enter your password"
            label="Password"
            icon={<Text>SHOW</Text>}
            secureTextEntry={true}
            iconPosition="right"
          />
          <CustomButton title="Submit" primary />
          <View style={styles.createSection} >
            <Text style={styles.infoText} >Need a new account ?</Text>
            <TouchableOpacity onPress={() => {navigate('REGISTER')}} >
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Index;
