import React, { useState } from 'react';
import { Alert, Button, Text, StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import hole1 from './images/hole1.png';
import hole2 from './images/hole2.png';
import hole3 from './images/hole3.png';
import hole4 from './images/hole4.png';
import hole5 from './images/hole5.png';
import hole6 from './images/hole6.png';
import key1 from './images/key1.png';
import key2 from './images/key2.png';
import key3 from './images/key3.png';
import key4 from './images/key4.png';
import key5 from './images/key5.png';
import key6 from './images/key6.png';
import { theme } from './theme';
import IconButton from './components/IconButton';
import Home from './components/Home';

const QContainer = styled.View`
  flex: 1;
  justifyContent: space-around;
  margin: 20px;
`;

const PContainer = styled.View`
  flex: 2;
  justifyContent: space-around;
  flex-direction: row;
  margin: 20px;
`;

const Container = styled.View`
  flex: 1;
  justifyContent: space-around;
  flex-direction: row;
`;


const Title = styled.Text`
    font-size: 24px;
    font-weight: 500;
    width: 300px;
    color: ${({ theme }) => theme.main};
    alignitems: center;
`;

const List = styled.View`
  flex: 2;
  flex-wrap: wrap;
  justifycontent: space-between;
  flex-direction: column;
`;

const ButtonContainer = styled.View`
  flex: 1;
  margin: 20px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default function App() {
  const [keys, setKeys] = useState({
    '1': {id: '1', type: key1, answer: '11', correct: false},
    '2': {id: '2', type: key2, answer: '22', correct: false},
    '3': {id: '3', type: key3, answer: '33', correct: false},
    '4': {id: '4', type: key4, answer: '44', correct: false},
    '5': {id: '5', type: key5, answer: '55', correct: false},
    '6': {id: '6', type: key6, answer: '66', correct: false},
  });
  const [holes, setHoles] = useState({
    '1': {id: '33', type: hole3, answer: '3', correct: false},
    '2': {id: '22', type: hole2, answer: '2', correct: false},
    '3': {id: '55', type: hole5, answer: '5', correct: false},
    '4': {id: '66', type: hole6, answer: '6', correct: false},
    '5': {id: '11', type: hole1, answer: '1', correct: false},
    '6': {id: '44', type: hole4, answer: '4', correct: false},
  });
  
  const width = Dimensions.get('window').width;

  const [selected, setSelected] = useState(Array.from([]));

  const handleClick = (id) => {
    setSelected([...selected, id])
    handleCheck(id)
  };

  const handleCheck = (id) => {
    if (selected.length === 2) {
      if (selected[0].answer === selected[1].id) {
        Alert.alert('맞췄습니다!');
        selected[0].correct = true;
        selected[1].correct = true;
        
      } else {
        Alert.alert('틀렸습니다!');
        selected[0].correct = false;
        selected[1].correct = false;
      }
      setSelected.id([]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <QContainer>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.background} //Android only
        />
        <QContainer>
          <Title>자물쇠의 모양에 맞게 열쇠를 찾으려 합니다. 알맞은 모양끼리 선택해보세요.</Title>
        </QContainer>
          <Container>
            <List width={width}>
              {Object.values(keys).map(type => (
                <IconButton key={type.id} answer={type.answer} />
              ))}
            </List>
          </Container>
          <Container>
            <List width={width}>
              {Object.values(holes).map(type => (
                <IconButton key={type.id} answer={type.answer} />
              ))}
            </List>
          </Container>
        <ButtonContainer>
          <Home/>
        </ButtonContainer>
      </QContainer>
    </ThemeProvider>
  );
}
