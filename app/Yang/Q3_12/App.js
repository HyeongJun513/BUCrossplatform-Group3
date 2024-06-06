import React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

export default function App() {
  return (
    <ThemeProvider>
        <Container>
            <StatusBar/>
            <Title>문제</Title>
            <Container>
                <></>
            </Container>
        </Container>
    </ThemeProvider>
  );
}