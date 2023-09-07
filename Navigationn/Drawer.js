import React from "react";
import { View,Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Menu from "../components/MenuItems";
import Feed from "../components/Feedback";
import Home from "../components/Home";
import Tapi from "./Taps";
const Drawer=createDrawerNavigator();

const Draw=()=>{
    return(
        <Drawer.Navigator initialRouteName="Homie" screenOptions={{drawerActiveBackgroundColor:"#F5B8B8",drawerLabelStyle:{color:"black"}}}>
            <Drawer.Screen name="Home" component={Tapi} options={{headerShown:false}}/>
            <Drawer.Screen name="menu" component={Menu} />
            <Drawer.Screen name="feed" component={Feed} options={{headerStyle:{backgroundColor:"#900C3F"},headerTintColor:"white"}}/>
            
        </Drawer.Navigator>
    )
    };
    export default Draw;