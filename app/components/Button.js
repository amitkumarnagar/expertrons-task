import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, style, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ fontSize: 18, fontWeight: '500' }}>{title}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  style: {},
  onPress: () => { },
  disabled: false
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
  onPress: PropTypes.func,
  disabled: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DDDDDD',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    minWidth: '80%'
  }
});

export default Button;
