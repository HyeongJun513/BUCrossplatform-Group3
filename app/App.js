import React from "react";
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { Link, router } from "expo-router";
import LogoImage from '../assets/images/LOGO.png'

const App = () => {

    return (
        <View style={{ flex: 1,backgroundColor:'green'}}>
            <View style={{flex: 9, alignItems: 'center', justifyContent:'center'}}>
                <Image source={LogoImage} style={{width: 150, height: 150, marginTop: 20}}/>
                <Text style={{ fontSize: 35, color:'white' }}> 인지능력 향상 퀴즈 </Text> 

                <TouchableOpacity style={{
                backgroundColor: "skyblue",
                width: 200,
                height: 50,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                margin: 10,
                marginTop: 20,
                }} onPress={() => { router.replace('/Park/Quest1/Q1'); }}>
                <Text style={{fontSize: 25}}>퀴즈풀기</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection:'column-reverse', alignItems: 'center'}}>
                <Link href='/AllQ'>모든 퀴즈 풀기</Link>
            </View>
        </View>
    );
};

export default App;