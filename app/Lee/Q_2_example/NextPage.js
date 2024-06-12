import React from "react";
import styled from "styled-components/native";
import { Link, router } from "expo-router";
import { Text, TouchableOpacity, Alert } from "react-native";

const Container = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

const NextPage = (props) => {
    return ( //정답이면 활성화, 정답 아니면 비활성화
        (props.checkAnswer == '정답') ? 
        <Container>
            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            width: 50,
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            
            }} onPress={() => { router.replace('../Quest2/Q2'); }}>
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
            }} onPress={() => Alert.alert("알림", "정답을 먼저 입력해주세요! \n정답인 경우에만 다음문제로 넘어갈 수 있습니다")}>
            <Text style={{fontSize: 35, color:'white'}}>▶</Text>
            </TouchableOpacity>
        </Container>
    );
};

export default NextPage;