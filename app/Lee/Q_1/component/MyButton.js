// component/MyButton.js
import React from 'react';
import { View, Button } from 'react-native';
import styles from './Styles';

const MyButton = ({ title, onPress }) => {
  return (
    <View style={styles.ButtonContainer}>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default MyButton;