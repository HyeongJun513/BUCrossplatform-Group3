// component/WordInput.js
import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Styles';

const WordInput = ({ value, onChangeText, placeholder }) => {
  return (
    <View style={styles.WordInputContainer}>
      <TextInput
        style={styles.WordInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};

export default WordInput;