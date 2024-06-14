import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import FoodImage from './Image/Food.png';
import Styles from './components/Styles';
import PrevPage from './PrevPage';
import NextPage from './NextPage';

const App = () => {
    return (
      <ScrollView contentContainerStyle={Styles.scrollViewContainer}>
      <View style={Styles.container}>
        <View style={Styles.quizExplainContainer}>
          <Text style={Styles.quizExplainText}>다음 이미지는 변비에 좋은 음식 6가지 입니다.</Text>
        </View>
        
        <Image style={Styles.image} source={FoodImage} />
      
        <View style={Styles.buttonContainer}>
          <PrevPage />
          <NextPage />
        </View>
      </View>
    </ScrollView>
  );
};


export default App;
