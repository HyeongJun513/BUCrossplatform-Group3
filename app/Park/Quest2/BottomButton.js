import React, { useState } from "react";
import { SafeAreaView } from 'react-native';
import Button_Submit from "./Button_Submit";
import Button_Reload from "./Button_Reload_Q2";
import PrevPage from "./PrevPage_Q2";
import NextPage from "./NextPage_Q2";

const BottomButton = (props) => {

    const [isAnswer, setIsAnswer] = useState(false);

    const AnswerCheckPress2 = () => {
        a = false;
        if (String(props.AnswerArr) == String(props.userInputArr)) {
            a= true;
        } else {
            a= false;
        }

        setIsAnswer(a);
        props.AnswerCheckPress();
    }

    return (
        <SafeAreaView style = {{flexDirection:'row', backgroundColor: '#d4d1cb', borderTopWidth: 3}}>
            <SafeAreaView style = {{flexDirection:'row', flex:1, justifyContent: 'space-between', marginTop: 5, marginBottom: 5}}>
                <PrevPage />   
                <SafeAreaView style={{ flexDirection:'row'}}>          
                    <Button_Reload onPress={props.ReloadPress} />
                    <Button_Submit AnswerCheckPress={AnswerCheckPress2}/>
                </SafeAreaView>
                <NextPage isAnswer={isAnswer} />   
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default BottomButton;