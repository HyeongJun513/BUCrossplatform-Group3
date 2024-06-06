// App.js
import React, { useState } from 'react';
import { View, Alert, Text, Image } from 'react-native';
import WordInput from './component/WordInput';
import MyButton from './component/MyButton';
import styles from './component/Styles';
import { images } from './images';

const App = () => {
  const [word, setWord] = useState('');
  const [answered, setAnswered] = useState(Array(Object.keys(images).length).fill(false));

  const TextInput = (text) => {
    setWord(text);
  };

  const checkAnswer = () => {
    const correctAnswers = Object.keys(images);
    const index = correctAnswers.indexOf(word);
    if (index !== -1 && !answered[index]) {
      Alert.alert('정답입니다!', '입력한 답: ' + word);
      const newAnswered = [...answered];
      newAnswered[index] = true;
      setAnswered(newAnswered);
      setWord('');
    } else {
      Alert.alert('오답입니다.', '입력한 답: ' + word);
    }
  };
  
  const imageKeys = Object.keys(images);

  return (
  
    <View style={styles.AppContainer}>   
       <View style={styles.TitleContainer}>
        <Text style={styles.Title}>다음 겹쳐진 그림을 보고 5가지를 찾아 이름을 적어보시오.  </Text>
      </View>
    
      <View style={styles.ImagesContainer}>
        
        {imageKeys.map((key, index) => (
          !answered[index] && (
            <View key={index} style={styles.ImageWrapper}>
              <Image source={images[key]} style={styles.ImageStyle} />
            </View>
          )
        ))}
      </View>
      <View>
        <WordInput
          value={word}
          onChangeText={TextInput}
          placeholder=" 정답을 입력하세요! "
        />
        <MyButton title=" 정답 확인 " onPress={checkAnswer} />
      </View>
    </View>
  );
};

export default App;