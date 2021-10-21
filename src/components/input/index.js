import React, { useState } from 'react';
import {View, TextInput, Text} from 'react-native';
import colors from '../../assets/theme/colors';
import styles from './styles';

const Input = ({
  value,
  error,
  iconPosition,
  onChangeText,
  style,
  label,
  icon,
  ...props
}) => {

  let [focused, setFocused] = useState(false)


  let getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition == 'left') {
        return 'row';
      } else if (iconPosition == 'right') {
        return 'row-reverse';
      }
    }
  };

  let getBorderColor = () => {

    if (focused) {
      return colors.primary
    }

    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {setFocused(true)}}
          onBlur={() => {setFocused(false)}}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
