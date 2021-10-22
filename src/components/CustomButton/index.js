import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import styles from './styles';

const CustomButton = ({
  disabled,
  loading,
  secondary,
  primary,
  danger,
  onPress,
  title,
}) => {
  let getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }

    if (primary) {
      return colors.primary;
    }
    if (secondary) {
      return colors.secondary;
    }
    if (danger) {
      return colors.danger;
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={ secondary ? colors.primary : colors.primary} />}

        {title && (
          <Text style={{color: disabled ? 'black' : 'white', paddingLeft: loading ? 5 : 0}}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
