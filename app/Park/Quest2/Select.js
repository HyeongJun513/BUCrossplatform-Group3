import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import CheckImage1 from './Image/check1.png';
import CheckImage2 from './Image/check2.png';

const Container = styled.SafeAreaView`
width: 50px;
height: 50px;
background-color: white;
margin: 0px 0px;
borderWidth: 1px;
borderColor: black;
`;

const Picture = styled.SafeAreaView`
width: 40px;
height: 23px;
background-color: white;
margin: 0px 1px;
`;

const Select = (props) => {
    const [check, setCheck] = useState(0);

    const windoWidth = Dimensions.get("window").width;
    
    const changeCheck = () => {
        a= String(props.GameNum);
        const test = [a];

        if (check == 0)  {
            setCheck(1);
            props.checkNum(1, props.GameNum, props.indexNum);
        } else if (check == 1) {
            setCheck(2);
            props.checkNum(2, props.GameNum, props.indexNum);
        }else if (check == 2) {
            setCheck(0);
            props.checkNum(0, props.GameNum, props.indexNum);
        }
    }

    const printCheck = () => {
        a = check;
        switch(a) {
            case 0:
                return <Text></Text>;
            case 1:
                return <Image source={CheckImage1} style={{ width: windoWidth/7*0.8, height: (windoWidth/7*0.8)*0.5625 }}/>
            case 2:
                return <Image source={CheckImage2} style={{ width: windoWidth/7*0.8, height: (windoWidth/7*0.8)*0.5625 }}/>
            default:
                return <Text>오류</Text>
        }
    }

    return (
        <Container style={{ width: windoWidth/7, height: windoWidth/7 }}>
            <TouchableOpacity style={{
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            }}
            onPress={() => changeCheck() }>
                <Text style={{ fontSize: 18 }}>{props.GameNum}</Text>
                <Picture>
                    {printCheck()}
                </Picture>
            </TouchableOpacity>
        </Container>
    );
};

export default Select;
