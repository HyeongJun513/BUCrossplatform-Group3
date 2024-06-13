import React, { useState } from 'react';
import { View, Alert, Text, Image, ScrollView } from 'react-native';
import WordInput from './components/WordInput';
import PrevPage from './components/PrevPage';
import NextPage from './components/NextPage';
import Styles from './components/Styles';
import { images } from './images';
import MyButton from './components/MyButton';

const App = () => {
  const [words, setWords] = useState(Array(Object.keys(images).length).fill(''));
  const [answered, setAnswered] = useState(Array(Object.keys(images).length).fill(false));
  const [checkAnswerStatus, setCheckAnswerStatus] = useState(false); // 추가

  const handleTextChange = (text, index) => {
    const newWords = [...words];
    newWords[index] = text;
    setWords(newWords);
  };

  const checkAnswer = (index) => {
    const correctAnswers = Object.keys(images);
    if (words[index] === correctAnswers[index]) {
      Alert.alert('정답입니다!', '입력한 답: ' + words[index]);
      const newAnswered = [...answered];
      newAnswered[index] = true;
      setAnswered(newAnswered);
      setCheckAnswerStatus(true); // 정답 시 상태 변경
    } else {
      Alert.alert('오답입니다.', '입력한 답: ' + words[index]);
      setCheckAnswerStatus(false); // 오답 시 상태 변경
    }
  };

  const imageKeys = Object.keys(images);

  return (
    <View style={Styles.appContainer}>
      <View style={Styles.headerContainer}>
        <Text style={Styles.header}>보기: 고구마, 딸기, 양배추, 검은콩, 사과, 토마토</Text>
      </View>
      <ScrollView>
        <View style={Styles.imageGrid}>
          {imageKeys.map((key, index) => (
            !answered[index] && (
              <View key={index} style={Styles.imageContainer}>
                <Image source={images[key]} style={Styles.imageStyle} />
                <WordInput
                  value={words[index]}
                  onChangeText={(text) => handleTextChange(text, index)}
                  placeholder={`정답을 입력해주세요!`}
                />
               <MyButton
                  title="Check Answer"
                  onPress={() => checkAnswer(index)}
                />
              </View>
            )
          ))}
        </View>
      </ScrollView>
      <View style={Styles.pageButtonsContainer}>
        <PrevPage />
        <NextPage checkAnswer={checkAnswerStatus ? '정답' : '오답'} />
      </View>
    </View>
  );
};

export default App;
