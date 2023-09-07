import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";

const Home=()=>{
    return(
        <View style={Styles.container}>
            <Image 
            style={Styles.image}
            source={require("../Img/little-lemon-logo-grey.png") }/>


            <Text style={Styles.text}>
We're glad that you here homie !
            </Text>
        </View>
    )
}
const Styles=StyleSheet.create(
{
    container:{flex:1,backgroundColor:"white"},
    text:{flex:1,fontSize:40,fontWeight:"900",color:'black',textAlign:"center",padding:50},

    image:{
        width:200,
        height:150,
        borderRadius:20,
        borderWidth:2,
        margin:10,
        marginHorizontal:100
}
}
);
export default Home;