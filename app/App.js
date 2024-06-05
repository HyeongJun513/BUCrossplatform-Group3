import React, { useEffect } from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from 'react-native';
import Q1 from './Park/Quest1/Q1'
import { Link, router } from "expo-router";

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const App = () => {
    //     useEffect(() => {
    //     setTimeout(() => { router.replace('/Park/Quest1/Q1'); }, 3000);
    // }, []);
    return (
        <View style={ { flex: 1 }}>
            <Text> App.js 컴포넌트 입니다. </Text>
            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            
            }} onPress={() => { router.replace('/Park/Quest1/Q1'); }}>
            <Text style={{fontSize: 35}}>Q1 문제 이동</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            
            }} onPress={() => { router.replace('/Park/Quest2/Q2'); }}>
            <Text style={{fontSize: 35}}>Q2 문제 이동</Text>
            </TouchableOpacity>
        </View>
    )
}

export default App;