import React from "react";
import styled from "styled-components/native";
import { router } from "expo-router";
import { Text, TouchableOpacity, Alert } from "react-native";

const Container = styled.SafeAreaView`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

const NextPage_Q2 = (props) => {
    return (
        props.isAnswer ? 
        <Container>
            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            width: 50,
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            }} onPress={() => { router.replace('../../Lee/Q_1/App');}}>
            <Text style={{fontSize: 35}}>▶</Text>
            </TouchableOpacity>
        </Container> : 
        <Container>
            <TouchableOpacity style={{
            backgroundColor: "gray",
            width: 50,
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            }} onPress={() => { Alert.alert("알림","정답을 먼저 체크해주세요! \n정답인 경우에만 다음문제로 넘어갈 수 있습니다");}}>
            <Text style={{fontSize: 35, color:'white'}}>▶</Text>
            </TouchableOpacity>
        </Container>
    );
};

export default NextPage_Q2;