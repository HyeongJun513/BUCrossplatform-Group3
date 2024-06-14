import React from "react";
import styled from "styled-components/native";
import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";


const Container = styled.SafeAreaView`
    width: 50px;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

const PrevPage_Q2 = () => {
    return (
        <Container>
            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            width: 50,
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            }}
            onPress={() => { router.replace('../Quest1/Q1'); }}
            >
            <Text style={{fontSize: 35}}>◀</Text>
            </TouchableOpacity>
        </Container>
    );
};

export default PrevPage_Q2;
