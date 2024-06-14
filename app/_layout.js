import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Stack } from 'expo-router';
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);
    return (
        <Stack screenOptions={{
            cardStyle: { backgroundColor: "#ffffff" },
            headerStyle: {
                height: 110,
                backgroundColor: "#95a5a6",
                borderBottomWidth: 5,
                borderBottomColor: "#34495e",
            },
            headerTiteStyle: { color: "#ffffff", fontSize: 24 },
            headerTitleAlign: "center",
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerTitle: "Loading",
                }}
            />
            <Stack.Screen
                name="Home"
                options={{
                    headerTitle: "Loading",
                }}
            />
            <Stack.Screen
                name="App"
                options={{
                    headerTitle: "메인화면",
                }}
            />
            <Stack.Screen
                name="AllQ"
                options={{
                    headerTitle: "전체 퀴즈",
                }}
            />
            <Stack.Screen
                name="Park/Quest1/Q1"
                options={{
                    headerTitle: "Quiz1",
                }}
            />
            <Stack.Screen
                name="Park/Quest2/Q2"
                options={{
                    headerTitle: "Quiz2",
                }}
            />
            <Stack.Screen
                name="Park/Quest3/Q3"
                options={{
                    headerTitle: "Quiz3",
                }}
            />
            <Stack.Screen
                name="Lee/Q_1/App"
                options={{
                    headerTitle: "Quiz3",
                }}
            />
            <Stack.Screen
                name="Lee/Q_2_example/App"
                options={{
                    headerTitle: "Quiz4",
                }}
            />
            <Stack.Screen
                name="Lee/Q_2_main/App"
                options={{
                    headerTitle: "Quiz4",
                }}
            />
            <Stack.Screen
                name="Yang/Q3_12/App"
                options={{
                    headerTitle: "Quiz5",
                }}
            />
        </Stack>
    );
};
