import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground,ScrollView } from 'react-native';

export default function Checkout({navigation}) {

return(
    <ImageBackground blurRadius={4} source ={{uri:"https://img.freepik.com/free-photo/business-partners-handshake-international-business-concept_53876-104046.jpg?size=626&ext=jpg"}} style={{
      backgroundColor: 'white',
      flex: 1,
      alignItems:'center',
    }}> 

    <ScrollView>
    <View style={{padding:20}}>

        <View style={{}}> 
        <Text style={{fontWeight:'700',paddingTop:24}}>
            First Name   
        </Text>
        <TextInput style={{
        backgroundColor:"#e3e3e3" ,
        padding: 16,
        borderWidth: 1,
        margin:10,
        width:200,
        }}  /> 
        </View>

        <View style={{alignContent:'space-between'}}> 
        <Text style={{fontWeight:'700',paddingTop:24}}>
            Last Name
        </Text>
        <TextInput style={{
        backgroundColor:"#e3e3e3" ,
        padding: 16,
        borderWidth: 1,
        margin:10,
        width:200,
        }}  /> 
        </View>

        <View style={{}}> 
        <Text style={{fontWeight:'700',paddingTop:24}}>
            Postal Code*
        </Text>
        <TextInput style={{
        backgroundColor:"#e3e3e3" ,
        padding: 16,
        borderWidth: 1,
        margin:10,
        width:200,
        }}  /> 
        </View>
    
        <View style={{}}> 
        <Text style={{fontWeight:'700',paddingTop:24}}>
            Address Line 1
        </Text>
        <TextInput style={{
        backgroundColor:"#e3e3e3" ,
        padding: 16,
        borderWidth: 1,
        margin:10,
        width:200,
        }}  /> 
        </View>


        <View style={{alignContent:'space-between'}}> 
        <Text style={{fontWeight:'700',paddingTop:24}}>
            Address Line 2
        </Text>
        <TextInput style={{
        backgroundColor:"#e3e3e3" ,
        padding: 16,
        borderWidth: 1,
        margin:10,
        width:200,
        }}  /> 
        </View>

        <View style={{alignContent:'space-between'}}> 
        <Text style={{fontWeight:'700',paddingTop:24}}>
            Shipping number 
        </Text>
        <TextInput style={{
        backgroundColor:"#e3e3e3" ,
        padding: 16,
        borderWidth: 1,
        margin:10,
        width:200,
        }}  /> 
        </View>

        <View style={{alignContent:'space-between'}}> 
        <Text style={{fontWeight:'700',paddingTop:24}}>
            Address Line 2
        </Text>
        <TextInput style={{
        backgroundColor:"#e3e3e3" ,
        padding: 16,
        borderWidth: 1,
        margin:10,
        width:200,
        }}  /> 
        </View>

        
    </View>

    <TouchableOpacity
    onPress={() => {
        alert('Thank You ');
      }}
    style={{backgroundColor:'black',
    borderRadius:30,
    borderWidth:20

}}>
<Text style={{color:'white',alignSelf:'center'}}>DONE</Text>
    </TouchableOpacity>
</ScrollView>
    
    </ImageBackground>
)

}
