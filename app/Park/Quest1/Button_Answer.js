import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button_Answer = props => {
    console.log(props);
    return (
        <TouchableOpacity style={{
            backgroundColor: "blue",
            height: 50,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
        }}
        onPress={() => props.AnswerCheckPress()}
        >
        <Text style={{ fontSize:14, color:"white" }}> 정답 입력 </Text>
        </TouchableOpacity>
    );
};

export default Button_Answer;