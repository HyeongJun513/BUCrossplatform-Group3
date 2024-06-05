import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { Link, router } from "expo-router";

const App = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center'}}>
            <Text style={{ fontSize: 20  }}> App.js 컴포넌트 </Text>

            <TouchableOpacity style={{
            backgroundColor: "skyblue",
            height: 50,
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
            }} onPress={() => { router.replace('/Park/Quest1/Q1'); }}>
            <Text style={{fontSize: 35}}>Park / Q1 이동</Text>
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
            <Text style={{fontSize: 35}}>Park / Q2 이동</Text>
            </TouchableOpacity>

        </View>
    )
}

export default App;