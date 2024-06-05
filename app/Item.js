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

const Item = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30}}>Item 컴포넌트입니다.</Text>
            <Text></Text>
            <Link href="/List">Go to List</Link>
            <Text></Text>
            <Link href="/App" style={{ fontSize: 20}}>Go to App(문제풀기)</Link>
            <Text></Text>
            <Link href="/Home">Go to Home</Link>
        </Container>
    );
};

export default Item;
