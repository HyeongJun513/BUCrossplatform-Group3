import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import ChickenImage0 from './Image/chicken0.png';
import ChickenImage90 from './Image/chicken90.png';
import ChickenImage180 from './Image/chicken180.png';
import ChickenImage270 from './Image/chicken270.png';
import GlassesImage0 from './Image/glasses0.png';
import GlassesImage90 from './Image/glasses90.png';
import GlassesImage180 from './Image/glasses180.png';
import GlassesImage270 from './Image/glasses270.png';
import BicycleImage0 from './Image/bicycle0.png';
import BicycleImage90 from './Image/bicycle90.png';
import BicycleImage180 from './Image/bicycle180.png';
import BicycleImage270 from './Image/bicycle270.png';
import EventInput from "./EventInput";

const Picture = styled.View`
width: 100px;
height: 100px;
background-color: gray;
margin: 5px 10px;
`;//margin: 상하, 좌우

const RandNum = (a) => Math.floor(Math.random() * a); //0~a-1사이의 랜덤값 리턴

const Q1 = () => {
    const [Change, setChange] = useState(0);

    const RandPicture = (a) => { //0~2사이의 값에 따라 이미지 리턴
        rotate = RandNum(4);
        if(rotate==0) {
            switch(a) {
                case 0: //0: 닭
                    return <Image source={ChickenImage0} style={{width: 100, height: 100}}/>
                case 1: //1: 안경
                    return <Image source={GlassesImage0} style={{width: 100, height: 100}}/>
                case 2: //2: 자전거
                    return <Image source={BicycleImage0} style={{width: 100, height: 100}}/>
                default:
                    return <Text> 오류 입니다.</Text>
            }
        } else if (rotate==1) {
            switch(a) {
                case 0: //0: 닭
                    return <Image source={ChickenImage90} style={{width: 100, height: 100}}/>
                case 1: //1: 안경
                    return <Image source={GlassesImage90} style={{width: 100, height: 100}}/>
                case 2: //2: 자전거
                    return <Image source={BicycleImage90} style={{width: 100, height: 100}}/>
                default:
                    return <Text> 오류 입니다.</Text>
            }
        } else if (rotate==2) {
            switch(a) {
                case 0: //0: 닭
                    return <Image source={ChickenImage180} style={{width: 100, height: 100}}/>
                case 1: //1: 안경
                    return <Image source={GlassesImage180} style={{width: 100, height: 100}}/>
                case 2: //2: 자전거
                    return <Image source={BicycleImage180} style={{width: 100, height: 100}}/>
                default:
                    return <Text> 오류 입니다.</Text>
            }
        } else if (rotate==3) {
            switch(a) {
                case 0: //0: 닭
                    return <Image source={ChickenImage270} style={{width: 100, height: 100}}/>
                case 1: //1: 안경
                    return <Image source={GlassesImage270} style={{width: 100, height: 100}}/>
                case 2: //2: 자전거
                    return <Image source={BicycleImage270} style={{width: 100, height: 100}}/>
                default:
                    return <Text> 오류 입니다.</Text>
            }
        }
    }

    const Print = () => { //문제 출력
        countChi = 0;
        countGla = 0;
        countBic = 0;
        arr = [];

        for (i=0; i<12; i++) { //arr[] 배열에 랜덤값 12개 삽입
            arr.push(RandNum(3));
        }

        console.log(arr);

        arr.map((a) => { //(엘리먼트, 인덱스 번호), 개수 세기
            if (a == 0) {
                countChi += 1;
            } else if (a == 1) {
                countGla += 1;
            } else if (a == 2) {
                countBic += 1;
            }
        })

        const Line = (a) => { //그림 1줄 출력
            return (
                <SafeAreaView style={{flexDirection: 'row', backgroundColor: 'white', alignItems: 'center'}}>
                    <Picture>
                        {RandPicture(arr[a]) } 
                    </Picture>
                    <Picture>
                        {RandPicture(arr[a+1])}
                    </Picture>
                    <Picture>
                        {RandPicture(arr[a+2])}
                    </Picture>
                </SafeAreaView>
            )
        }
        
        const ReloadPress = () => {
            a = Change;
            setChange(a+1);
            console.log('리로드 버튼 클릭, change 값 :' +(a+1))
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{flex: 1}}>
                    <SafeAreaView style={{ flex: 1, alignItems: 'center', borderBottomWidth: 2, borderTopWidth: 2,  borderStyle: 'dashed', margin: 5 }}>
                        <Text style={{ fontSize: 20, marginTop: 5 }}> 다음의 여러 가지 모양들 중, </Text>
                        <Text style={{ fontSize: 20, marginBottom: 5 }}> 각 모양의 개수를 세어 적어보세요. </Text>
                    </SafeAreaView>
                    
                    <SafeAreaView style={{ flex: 6, alignItems: 'center', marginTop:10, marginBottom:15 }}>
                        <SafeAreaView style={{borderWidth: 3}}>
                        {Line(0)}
                        {Line(3)}
                        {Line(6)}
                        {Line(9)}
                        </SafeAreaView>
                    </SafeAreaView>
                </ScrollView>
                    <EventInput answer1={countChi} answer2={countGla} answer3={countBic} ReloadPress={ReloadPress}/>
            </SafeAreaView>
        )
    }

    return (
        Print()
    );
};

export default Q1;