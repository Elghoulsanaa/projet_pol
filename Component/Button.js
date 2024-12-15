import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import COLORS from './Constants/Colors';
import { TouchableOpacity } from 'react-native';

const Button = (props) => {
  const filledBgColor = props.color || COLORS.primary;
  const outlinedColor = COLORS.white;
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? COLORS.white : COLORS.primary;

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgColor }, props.style]}
      onPress={props.onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default Button;
