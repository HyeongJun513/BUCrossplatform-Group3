import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import RefreshImage from './Image/refresh.png';

const Button_Reload = props => {
    console.log(props);
    return (
        <TouchableOpacity style={{
            backgroundColor: "green",
            height: 30,
            width: 30,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
        }}
        onPress={() => props.onPress()}>
        <Image source={RefreshImage} style={{width: 30, height: 30, borderWidth:1}}/>
        </TouchableOpacity>
    );
};

export default Button_Reload;