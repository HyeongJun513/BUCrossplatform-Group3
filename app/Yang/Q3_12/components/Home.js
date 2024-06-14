import React from "react";
import styled from "styled-components/native";
import { Link, router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";


const Container = styled.View`
    width: 100px;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`;

const Home = () => {
    return (
        <Container>
            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            width: 100,
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            }}
            onPress={() => { router.replace('../../App'); }}
            >
            <Text style={{fontSize: 25}}>처음으로</Text>
            </TouchableOpacity>
        </Container>
    );
};

export default Home;