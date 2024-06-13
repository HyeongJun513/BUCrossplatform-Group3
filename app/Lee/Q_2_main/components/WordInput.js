// component/WordInput.js
import React from 'react';
import { View, TextInput } from 'react-native';
import Styles from './Styles';

const WordInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={Styles.WordInputContainer}>
      <TextInput
        style={Styles.WordInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default WordInput;