import React from "react";
import styled from "styled-components/native";
import { Link, router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const Q3 = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30 }}> Q3 컴포넌트입니다. </Text>
            <Text></Text>
            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            }}
            onPress={() => { router.replace('../../Home'); }}
            >
            <Text style={{fontSize: 35}}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            }}
            onPress={() => { router.replace('../../App'); }}
            >
            <Text style={{fontSize: 35}}>App</Text>
            </TouchableOpacity>
        </Container>
    );
};

export default Q3;
