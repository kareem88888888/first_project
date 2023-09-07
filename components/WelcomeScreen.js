import React from "react";
import { View,Text,Pressable,StyleSheet,ImageBackground,ScrollView,Image } from "react-native";
 
const WelcomeScreen=({navigation})=>{
    return(
       <View style={Styles.container}>
        <ImageBackground style={Styles.back} source={require('../Img/background.jpg')} resizeMode="cover" >

        <Text style={Styles.headerText}>Welcome to our little 
            hope u enjoy with us !</Text>

        <Pressable style={Styles.button} onPress= {() =>{navigation.navigate("Register")}}><Text style={Styles.textbutton}>New letter</Text></Pressable>

        <Pressable style={Styles.button} onPress= {() =>{navigation.navigate("Welcome again !")}}><Text style={Styles.textbutton}>Old letter</Text></Pressable>



      </ImageBackground>
       </View>
    )
}
const Styles=StyleSheet.create({

    container:{flex:1},
    back:{flex:1,justifyContent:"center"},
    headerText:{flex:1,fontSize:40,fontWeight:"900",color:'black',textAlign:"center",padding:100},

    button:{fontSize:20,
        padding:10,
        margin:80,
        marginVertical:8,
        backgroundColor:'#84BFF1',
        borderColor:'#EDEFEE',
        borderWidth:2,
        borderRadius:30,
   justifyContent:"flex-end",
},
  
  
          textbutton:{color:'black',
        textAlign:'center',
        fontSize:32},
        image:{
            width:200,
            height:150,
            borderRadius:30,
            borderWidth:2,
            borderColor:'red',
            margin:10,
            marginHorizontal:100
}}
)
export default WelcomeScreen;