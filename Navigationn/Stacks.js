import React from "react";
import{View,Text, StyleSheet}from"react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../components/WelcomeScreen";
import Register from "../components/newLetter";
import Login from "../components/oldLetter";
import Tapi from "./Taps";
import Draw from "./Drawer";
const Stack=createNativeStackNavigator();
const Stacks=()=>{
    return(

<Stack.Navigator initialRouteName="Little Lemon" screenOptions={{
    headerStyle:{backgroundColor:"black"},
    headerTintColor:"white",
    headerTitleAlign:"center",
    headerTitleStyle:{fontWeight:'bold'}}}>
    <Stack.Screen name="Litlle Lemon" component={WelcomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Register" component={Register}/>
    <Stack.Screen name="Welcome again !" component={Login}/>
    <Stack.Screen name="ddd" component={Draw} options={{headerShown:false}}/>
</Stack.Navigator>
    )
}
const Styles=StyleSheet.create(
    {
        constainer :{flex:1}
    }
)
export default Stacks;