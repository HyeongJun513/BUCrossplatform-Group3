import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import FoodImage from '../assets/Example/Food.png';
import Styles from './components/Styles';

const App = () => {
    return (
      <View style={Styles.container}>
        <View style={Styles.quizExplainContainer}>
          <Text style={Styles.quizExplainText}>다음 이미지는 변비에 좋은 음식 6가지 입니다.</Text>
        </View>
        
          <Image
            style={Styles.image}
            source={FoodImage}
          />
      
        <View style={Styles.buttonContainer}>
          <Button title="PrevPage" onPress={() => {}} />
          <Button title="SubmitButton" onPress={() => {}} />
          <Button title="NextPage" onPress={() => {}} />
        </View>
      </View>
    );
  };



export default App;
