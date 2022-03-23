import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ToDoScreen from './views/ToDoScreen/ToDoScreen';
import HomeScreen from "./views/HomeScreen/HomeScreen";
import AddToDoListScreen from "./views/AddToDoListScreen/AddToDoListScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="ToDoScreen" component={ToDoScreen}/>
                <Stack.Screen name="AddToDoListScreen" component={AddToDoListScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
