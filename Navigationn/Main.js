import React from "react";
import{View,Text, StyleSheet}from"react-native"
import { NavigationContainer } from '@react-navigation/native';
import Stacks from "./Stacks";
const Main=()=>{
    return(
<NavigationContainer>
<Stacks/>
</NavigationContainer>
    )
}
const Styles=StyleSheet.create(
    {
        constainer :{flex:1}
    }
)
export default Main;