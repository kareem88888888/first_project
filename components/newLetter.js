import React from "react";
import { View,Text,StyleSheet,TextInput,Pressable,KeyboardAvoidingView,Alert,Platform,ScrollView } from "react-native";

const Register=({navigation})=>{
    const[firstName,onChanefirstName]=React.useState("")
    const[email,onChaneEmail]=React.useState("")
    const[password,onChangePassword]=React.useState("")
    return(
        <ScrollView style={Styles.container}>
<Text style={Styles.headerText}>Welcome to our restaurant</Text>
<TextInput
style={Styles.input}
value={firstName}
onChangeText={onChanefirstName}
placeholder="Name"
keyboardType="default"
/>



<TextInput
style={Styles.input}
value={email}
onChangeText={onChaneEmail}
placeholder="E-mail"
keyboardType="email-address"
/>


<TextInput
style={Styles.input}
value={password}
onChangeText={onChangePassword}
placeholder="Password"
keyboardType="number-pad"
secureTextEntry={true}
/>

<Pressable style={Styles.button} onPress= {() =>{navigation.navigate("ddd")}}><Text style={Styles.textbutton}>Register</Text></Pressable>


        </ScrollView>
    )
}
const Styles=StyleSheet.create(
    {
        container:{flex:1,backgroundColor:"white"},
        headerText:{padding:30,fontSize:20,fontWeight:"bold",textAlign:"center",color:"black"},
        input:{ 
 color:"black",
 fontSize:20,
 borderWidth:1,
 borderColor:"#EDEFEE",
 backgroundColor:"#EDEFEE",
 padding:10,
 margin:12,
 height:40
           },

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
)
export default Register;