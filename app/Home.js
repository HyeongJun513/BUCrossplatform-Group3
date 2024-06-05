import React, { useEffect, useState } from "react";
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
    const [time, setTime] = useState(3);

    useEffect(() => {
        setTimeout(() => { router.replace('/App'); }, 3000);
    }, []);

    if(time >= 1) {
        a = time;
        setTimeout(() => setTime(a-1), 1000);
    } else if (time == 0) {
        a = time;
        setTime(3);
    }

    return (
        <Container>
            <Text style={{ fontSize: 30}}> Home 시작 화면 (로딩창) </Text>
            <Text style={{ fontSize: 20 }}> {time}초뒤 App(Quiz) 컴포넌트 이동</Text>
            <Link href="/Item">Go to Item</Link>
        </Container>
    );
};

export default Home;