import React from "react";
import { Text,View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../components/Home";
import About from "../components/Aboutus";
import Ionicons from "react-native-vector-icons/Ionicons"
const Tap=createBottomTabNavigator();
const Tapi=()=>{
    return(
        <Tap.Navigator screenOptions={({ route,navigation }) =>({
            tabBarIcon:({focused,color,size})=>{
let iconName;
if(route.name ==="Homeie"){
    iconName="heart-half-outline"}
    else if(route.name==="about us"){
    iconName="help-outline"
}
return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'blue',
        headerStyle:{backgroundColor:"#900C3F"},
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerTitleStyle:{fontWeight:'bold'} })}>

            <Tap.Screen name="Homeie" component={Home}/>
            <Tap.Screen name="about us" component={About}/>
        </Tap.Navigator>
    )
}
export default Tapi;