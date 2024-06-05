import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button_Submit = props => {
    console.log(props);
    return (
        <TouchableOpacity style={{
            backgroundColor: "blue",
            height: 40,
            width: 100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginLeft: 5,
            marginTop: 5,
        }}
        onPress={() => props.AnswerCheckPress()}
        >
        <Text style={{ fontSize:14, color:"white" }}> 정답 체크 </Text>
        </TouchableOpacity>
    );
};

export default Button_Submit;