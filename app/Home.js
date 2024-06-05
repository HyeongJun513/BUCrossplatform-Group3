import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Link, router } from "expo-router";
const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const Home = () => {
    useEffect(() => {
        setTimeout(() => { router.replace('/Item'); }, 1000);
    }, []);
    return (
        <Container>
            <Text style={{ fontSize: 30,}}> Home 시작 화면입니다. </Text>
            <Link href="/Item">Go to Item</Link>
        </Container>
    );
};

export default Home;