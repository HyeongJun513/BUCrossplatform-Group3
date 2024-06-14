import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView, Alert } from 'react-native';
import Select from "./Select";
import BottomButton from "./BottomButton";

const Q2 = () => {
    const [reload, setReload] = useState(0); 

    trueCount = 0;
    falseCount = 0;

    RandNum = Math.floor(Math.random() * 40 + 1);
    userInputArr = []; 
    AnswerArr = []; 

    for (i=0; i<60; i++) { 
        userInputArr.push(0);
    }
    
    const checkNum = (a, b, c) => {
        console.log('checkNum 실행!');
        console.log('체크 개수 : ' + a);
        console.log('GameNum : ' + b);
        console.log('indexNum : ' + c);

        console.log('이전 userInputArr : ' +userInputArr);
        userInputArr.splice(c, 1, a); 
        console.log('이후 userInputArr : ' +userInputArr);
    }

    const solution = (a) => { 
        count = 0;
        String(a).split('').map((n)=> {
            if(['3','6','9'].includes(n)){
            count++
            }
        })
        return count;
    }

    for (i=0; i<60; i++) { 
        AnswerArr.push(solution(RandNum+i));
    }

    const AnswerCheckPress = () => {
        a= solution(RandNum);
        console.log(RandNum+'의 3,6,9 개수 : '+a)

        console.log('AnswerArr 배열 : '+AnswerArr);
        console.log('userInputArr 배열 : ' +userInputArr);

        if (String(AnswerArr) == String(userInputArr)) { 
            Alert.alert('정답','정답입니다!');
        } else {
            Alert.alert('오답','오답입니다');
        }
    }
    
    const Line = (a) => {
        return (
            <SafeAreaView style={{ flexDirection:'row' }}>
                <Select GameNum={RandNum+a} checkNum={checkNum} indexNum={a} reload={reload}/>
                <Select GameNum={RandNum+a+1} checkNum={checkNum} indexNum={a+1}/>
                <Select GameNum={RandNum+a+2} checkNum={checkNum} indexNum={a+2}/>
                <Select GameNum={RandNum+a+3} checkNum={checkNum} indexNum={a+3}/>
                <Select GameNum={RandNum+a+4} checkNum={checkNum} indexNum={a+4}/>
                <Select GameNum={RandNum+a+5} checkNum={checkNum} indexNum={a+5}/>
            </SafeAreaView>
        )
    }

    const ReloadPress = () => {
        a=reload;
        setReload(a+=1);
    }

    return (
        <SafeAreaView style={{ flex: 1, alignItems:'center'}}>
            <ScrollView>
                <SafeAreaView style={{ alignItems: 'center', borderBottomWidth: 2, borderTopWidth: 2,  borderStyle: 'dashed', margin: 5}}>
                    <Text style={{ fontSize: 20, marginTop: 5 }}> 369 게임의 규칙을 보고 숫자에 맞게 </Text>
                    <Text style={{ fontSize: 20, marginBottom: 5 }}> 숫자 박스를 클릭해 체크 표시를 해보세요. </Text>
                </SafeAreaView>
                <SafeAreaView style={{ alignItems: 'center', borderWidth: 1, borderRadius: 15, margin:5 }}>
                    <SafeAreaView style={{backgroundColor:'#FFC595', width:'100%', alignItems:'center', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderWidth: 1}}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}> 규칙 </Text>
                    </SafeAreaView>
                    <SafeAreaView style={{width:'100%', alignItems:'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, borderWidth: 1}}>
                        <Text style={{ fontSize: 18 }}> 3, 6, 9가 들어간 숫자에 모두 체크 표시를 합니다. </Text>
                        <Text style={{ fontSize: 18 }}> 예) 30은 체크 1번 33은 체크 2번 </Text>
                    </SafeAreaView>
                </SafeAreaView>

                <SafeAreaView style={{ alignItems: 'center', marginTop: 10, marginBottom: 10}}>
                        <SafeAreaView style={{ borderWidth: 2 }}>
                        {Line(0)}
                        {Line(6)}
                        {Line(12)}
                        {Line(18)}
                        {Line(24)}
                        {Line(30)}
                        {Line(36)}
                        {Line(42)}
                        {Line(48)}
                        {Line(54)}
                    </SafeAreaView>
                </SafeAreaView>
            </ScrollView>

            <BottomButton ReloadPress={ReloadPress} AnswerCheckPress={AnswerCheckPress} AnswerArr={AnswerArr} userInputArr={userInputArr} />
        </SafeAreaView>
    );
};

export default Q2;
