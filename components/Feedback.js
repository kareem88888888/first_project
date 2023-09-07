import React from "react";
import { TextInput,View,Text,Pressable,Alert, StyleSheet,KeyboardAvoidingView} from "react-native";
import { useColorScheme } from "react-native";

const Feed=()=>{
    const colorScheme=useColorScheme();
    const [name,onChangeName]=React.useState("");
    const[message,onChangeMessage]=React.useState("");
    return(
        
        <View style={Styles.container}>

<Text style={Styles.text}>If u have a problem we will consider ur feedback..or not *_* </Text>

<TextInput
 style={Styles.input}
 value={name}
 onChangeText={onChangeName}
 placeholder="Name"
 keyboardType="default"/>


<TextInput
 style={Styles.message}
 value={message}
 onChangeText={onChangeMessage}
 placeholder="The only placy u say ur opinion"
 multiline={true}
 keyboardType="default"/>


<Pressable style={Styles.button} onPress={()=> {Alert.alert("thanks for your Feedback")}}>
    <Text style={Styles.buttonText}>send</Text>
    </Pressable>
        </View>

    )
};
const Styles=StyleSheet.create(
    { container:{flex:1,backgroundColor:"white"},

    text:{fontSize:40,fontWeight:"bold",color:'black',textAlign:"center",padding:20},

    input:{
        color:"black",
        borderWidth:1,
        borderColor:"#EDEFEE",
        backgroundColor:"#EDEFEE",
        fontSize:28,
        padding:5,
        margin:5,
        height:40,
        
    },
    message:{
        color:"black",
        borderWidth:1,
        borderColor:"#EDEFEE",
        backgroundColor:"#EDEFEE",
        fontSize:28,
        padding:10,
        margin:12,
        height:150,
        textAlignVertical:"top"
    },

    button:{
        fontSize:20,
        padding:10,
        margin:80,
        borderWidth:2,
        bordercolor:"#EDEFEE",
        backgroundColor:"#F29A9A",
        borderRadius:30,
        justifyContent:"flex-end"
    },
    buttonText:{color:"black",
textAlign:"center",
fontSize:20}
    }
);
export default Feed;