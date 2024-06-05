import React from "react";
import styled from "styled-components/native";
import { Link } from "expo-router";
import { Text } from "react-native";

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
            <Link href="/List" style={{ fontSize: 20 }}>Go to List</Link>
            <Text></Text>
            <Link href="/Home">Go to Home</Link>
        </Container>
    );
};

export default Q3;
