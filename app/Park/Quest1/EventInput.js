import React, { useState } from "react";
import { View, Text, TextInput, Alert, SafeAreaView } from "react-native";
import Button_Answer from "./Button_Answer";
import Button_Reload from "./Button_Reload";
import NextPage from "./NextPage";
import PrevPage from "./PrevPage";

const EventInput = (props) => {
    const [userinput1, setUserinput1] = useState('');
    const [userinput2, setUserinput2] = useState('');
    const [userinput3, setUserinput3] = useState('');
    const [checkAnswer, setCheckAnswer] = useState('입력중');
    const _onChangeText1 = text => setUserinput1(text);
    const _onChangeText2 = text => setUserinput2(text);
    const _onChangeText3 = text => setUserinput3(text); //_onChange와 같은 기능

    const AnswerCheckPress = () => {
        a = 0;
        (userinput1 == props.answer1) ? a+=1 : null;
        (userinput2 == props.answer2) ? a+=1 : null;
        (userinput3 == props.answer3) ? a+=1 : null;

        if (a == 3) {
            setCheckAnswer('정답');
            Alert.alert('정답','우측하단 화살표를 눌러 다음문제로 넘어가세요');
        } else if ( a == 2 ) {
            setCheckAnswer('오답');
            Alert.alert('오답','1개의 오답이 있습니다! \n답을 다시 입력해주세요.');
        } else if ( a == 1 ) {
            setCheckAnswer('오답');
            Alert.alert('오답','2개의 오답이 있습니다! \n답을 다시 입력해주세요.');
        } else if ( a == 0 ) {
            setCheckAnswer('오답');
            Alert.alert('오답','3개의 오답이 있습니다! \n답을 다시 입력해주세요.');
        }
    }

    return ( //text값이 바뀌면 리랜더링됨
    <SafeAreaView style={{ borderTopWidth: 3, backgroundColor: '#d4d1cb'}}>

        <SafeAreaView style={{ alignItems: 'center'}}>
            
            <View style = {{ margin: 10, flexDirection: 'row', width:'100%', justifyContent: 'space-between'}}>
                <Button_Reload onPress={props.ReloadPress}/>

                <SafeAreaView style={{flexDirection:'row'}}>
                    <Text style={{fontSize: 20}}> 닭: </Text>
                    <TextInput style={{ borderBottomWidth: 1, fontSize: 20, width: 100, textAlign: 'center'}}
                    placeholder="" maxLength={1} keyboardType="number-pad" returnKeyType="next" onChangeText={_onChangeText1} />
                    <Text style={{fontSize: 20}}>개 </Text>
                    {/* <Text style = {{ margin: 10, fontSize: 10 }}>정답: {props.answer1}</Text> */}
                </SafeAreaView>
                <SafeAreaView style={{ width: 30, height: 30 }} />
            </View>

            <View style = {{ margin: 10, flexDirection: 'row'}}>
                <Text style={{fontSize: 20}}> 안경: </Text>
                <TextInput style={{ borderBottomWidth: 1, fontSize: 20, width: 100, textAlign: 'center'}}
                placeholder="" maxLength={1} keyboardType="number-pad" returnKeyType="next" onChangeText={_onChangeText2} />
                <Text style={{fontSize: 20}}>개 </Text>
                {/* <Text style = {{ margin: 10, fontSize: 10 }}>정답: {props.answer2}</Text> */}
            </View>

            <View style = {{ margin: 10, flexDirection: 'row'}}>
                <Text style={{fontSize: 20}}> 자전거: </Text>
                <TextInput style={{ borderBottomWidth: 1, fontSize: 20, width: 100, textAlign: 'center'}}
                placeholder="" maxLength={1} keyboardType="number-pad" returnKeyType="next" onChangeText={_onChangeText3} />
                <Text style={{fontSize: 20}}>개 </Text>
                {/* <Text style = {{ margin: 10, fontSize: 10 }}>정답: {props.answer3}</Text> */}
            </View>

            <View style = {{flexDirection:'row', borderTopWidth: 1, marginBottom: 5, borderStyle:'dotted'}}>
                <View style = {{flexDirection:'row', flex:1, justifyContent: 'space-between', marginTop: 5}}>
                    <PrevPage style={{flexDirection:'row-reverse'}}/>
                    <Button_Answer AnswerCheckPress={AnswerCheckPress}/>
                    <NextPage checkAnswer={checkAnswer} style={{flexDirection:'row-reverse'}}/>
                </View>
            </View>
        </SafeAreaView>
    </SafeAreaView>
    );
};

export default EventInput;