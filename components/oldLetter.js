import React from "react";
import { View,Text,ScrollView,TextInput,KeyboardAvoidingView, StyleSheet,Pressable } from "react-native";

const Login=({navigation})=>{
    const[Email,onChangemail]=React.useState("")
    const[password,onChangePassword]=React.useState("");
    return(
        <ScrollView style={Styles.container}>
<Text style={Styles.headertext}> log in to continu</Text>

<TextInput
style={Styles.input}
value={Email}
onChangeText={onChangemail}
placeholder="E-mail"
keyboardType="default"
/>

<TextInput
style={Styles.input}
value={password}
onChangeText={onChangePassword}
placeholder="Password"
keyboardType="number-pad"
secureTextEntry={true}
/>


<Pressable style={Styles.button} onPress= {() =>{navigation.navigate("ddd")}}><Text style={Styles.textbutton}>LOG In</Text></Pressable>

        </ScrollView>
    )
};
const Styles=StyleSheet.create({

    container:{flex:1,backgroundColor:"white"},
    headertext:{padding:30,fontSize:20,fontWeight:"bold",textAlign:"center",color:"black"},
    input:{color:"black",borderWidth:1,borderColor:"#EDEFEE",fontSize:20,padding:10,margin:12,height:40,backgroundColor:"#EDEFEE"},

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
}
);
export default Login;