import React from "react";
import { View,Text,StyleSheet } from "react-native";

const About=()=>{
    return(
        <View style={Styles.container}>
            <Text style={Styles.text}>

We hope we make u a happy clown ..
i'm joking we all love u here bozo
            </Text>
        </View>
    )
}
const Styles=StyleSheet.create(
{
    container:{flex:1,backgroundColor:"white"},
    text:{flex:1,fontSize:40,fontWeight:"900",color:'black',textAlign:"center",padding:100}
}

);
export default About;