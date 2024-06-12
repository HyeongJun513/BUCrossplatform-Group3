import React from "react";
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { Link, router } from "expo-router";
import LogoImage from '../assets/images/LOGO.png'

const App = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor:'green'}}>

            <Image source={LogoImage} style={{width: 150, height: 150, marginTop: 20}}/>
            <Text style={{ fontSize: 35, color:'white' }}> 인지능력 향상 퀴즈 </Text> 

            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
            }} onPress={() => { router.replace('/Park/Quest1/Q1'); }}>
            <Text style={{fontSize: 25}}>Park / 문제1 이동</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
            }} onPress={() => { router.replace('/Park/Quest2/Q2'); }}>
            <Text style={{fontSize: 25}}>Park / 문제2 이동</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
            }} onPress={() => { router.navigate('/Lee/Q_1/App'); }}>
            <Text style={{fontSize: 25}}> Lee / 문제1 이동</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
            }} onPress={() => { router.navigate('/Lee/Q_2_example/App'); }}>
            <Text style={{fontSize: 25}}> Lee / 문제2 이동</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
            }} onPress={() => { router.navigate('/Yang/Q3_12/App'); }}>
            <Text style={{fontSize: 25}}> Yang / 문제 이동</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
            }} onPress={() => { router.replace('/Home'); }}>
            <Text style={{fontSize: 25}}> 로딩화면 이동 </Text>
            </TouchableOpacity>

        </View>
    );
};

export default App;