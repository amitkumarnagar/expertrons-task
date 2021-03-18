import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Input = ({
  placeholder,
  label,
  value,
  onChangeText,
  style,
  editable
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, style]}
        value={value}
        onChangeText={onChangeText}
        editable={editable}
      />
    </View>
  );
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  value: '',
  onChangeText: () => { },
  style: {},
  editable: true
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.object,
  editable: PropTypes.bool
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 5
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: 18,
    minWidth: '80%',
    backgroundColor: '#ededed'
  }
});

export default Input;
