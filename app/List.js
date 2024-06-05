import React from "react";
import styled from "styled-components/native";
import { Link } from "expo-router";
import { Text, Button } from "react-native";


const Container = styled.View`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: center;
`;

const items = [
    {_id: 1, name: "React Native"},
    {_id: 2, name: "React Navigation"},
    {_id: 3, name: "Hanbit"},
];

const List = () => {
    return (
        <Container>
            <Text style={{ fontSize: 30,}}>List 컴포넌트입니다</Text>
            {items.map((item) => ( // <Link key=1 href="/topic/React Native"> React Native </Link>와 같은 형태
            ///topic/React Native의 경로의 파일을 열어야 하나 경로상에 파일이 존재하지 않으므로 +not-found.tsx가 자동으로 호출
                <Link key={item._id} href={"/topic/" + item.name}>
                    {item.name}
                </Link>
            ))}
            <Text>hello</Text>
            <Link href="/App">Go to App</Link>
            <Link href="/Item">Go to Item</Link>
            <Button title="hello" onPress={() => Alert.alert('test')}/>
        </Container>
    );
};

export default List;