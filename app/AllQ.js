import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Link, router } from "expo-router";
import LogoImage from '../assets/images/LOGO.png'

const AllQ = () => {

    return (
        <ScrollView style={{backgroundColor:'green'}}>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor:'green'}}>
                <Image source={LogoImage} style={{width: 150, height: 150, marginTop: 20}}/>
                <Text style={{ fontSize: 35, color:'white' }}> 모든 퀴즈 풀기 </Text> 

                <TouchableOpacity style={{
                backgroundColor: "skyblue",
                height: 50,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                margin: 10,
                marginTop: 20,
                }} onPress={() => { router.replace('/Park/Quest1/Q1'); }}>
                <Text style={{fontSize: 20}}> 박형준: 퀴즈1(1_27) </Text>
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
                <Text style={{fontSize: 20}}> 박형준: 퀴즈2(2_37) </Text>
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
                <Text style={{fontSize: 20}}> 이동헌: 퀴즈3(2_36) </Text>
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
                <Text style={{fontSize: 20}}> 이동헌: 퀴즈4(4_11) </Text>
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
                <Text style={{fontSize: 20}}> 양유진: 퀴즈5(3_12) </Text>
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
                <Text style={{fontSize: 25}}> 로딩화면 </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AllQ;