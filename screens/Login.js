import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput,ScrollView, Platform, TouchableWithoutFeedback,Keyboard, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Feather, MaterialCommunityIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




export default function Login({navigation}) {
  return (
    
<TouchableWithoutFeedback onPress={() => {
  Keyboard.dismiss();
console.log('dismissed keyboard');
}}>


<ScrollView>
  <ImageBackground blurRadius={10} source= {{uri:"https://images.unsplash.com/photo-1634033244119-9dce33e3aedb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}}
 style={{flex:1}}> 
    <View style={{ justifyContent: "center", alignItems: "center",marginBottom: 10 }}>
        <Image 
        style={{
            width: 110,
            height: 110,
            marginTop: 30,
            borderRadius: 10,
            transform:[{rotate:"45deg"}],
            marginBottom: 30,
        }}
        source= {{uri:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/081d21e6-5700-47bc-b7eb-499169d2a424/dbrsi7l-7dcb9ce5-3b0f-4564-b298-46084570f09c.png/v1/fill/w_536,h_437,q_80,strp/pizza_offer_animated_banner_by_deusgeneral_dbrsi7l-fullview.jpg"
          }}
         />
         
       <Text style={{color: "rgba(0,0,0,0.6)", 
       fontSize: 24 ,
        fontWeight: '900',
        color:'black',
         fontSize: 30,
         paddingBottom:50,
         fontStyle:"italic",
         marginBottom: 40,
         }}> PIZZA IN</Text>
        

         </View>
         </ImageBackground>
         
   <View style={{flex: 2,
    justifyContent: "center",
    backgroundColor: 'white',
    alignItems: "center",
     borderTopStartRadius:80,
     borderTopEndRadius:80 ,
     paddingBottom: 50,
     bottom:70

    }}>

      <View style={{padding:5}}>
       
      </View>

      


   <Text style={{ marginTop: 15}}>EMAIL OR USERNAME</Text>

   <TextInput style={{
    backgroundColor:"#e3e3e3" ,
    padding: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    margin:10,
    width:200,
    }} placeholder="new" /> 


   <Text>PASSWORD</Text>
   
   <TextInput secureTextEntry= {true} style={{
    backgroundColor:"#e3e3e3" ,
    padding: 16,
    borderWidth: 1,
    margin:10,
    borderStyle: 'dashed',
    width:200,
    }} placeholder="new" /> 

     <TouchableOpacity onPress={() => {
       navigation.navigate("Home")
      }}>
      <Text style={{backgroundColor: "#3EB489", 
     padding: 10,
     paddingHorizontal: 60 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,}}>SUBMIT</Text>
      </TouchableOpacity>

    <TouchableOpacity  
     style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     paddingHorizontal: 50 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,}}>
         <AntDesign name="google" size={24} color="rgb(256,100,10)" />
    <Text style={{fontSize: 20 , marginLeft: 10 }}>Login With Gmail</Text>
  
    

   </TouchableOpacity>

   <TouchableOpacity 
   
   style={{backgroundColor: "black", 
     padding: 10,
     borderRadius: 10,
     flexDirection: 'row',
     paddingHorizontal: 60 ,
     marginTop: 20,}}>
         <AntDesign name="apple1" size={24} color="white"/>
    <Text style={{fontSize: 17, color: "white", marginLeft:10}}>Login With Apple</Text>
   </TouchableOpacity>

   <TouchableOpacity>
   <Text style={{marginTop:10, fontWeight: '500', color: 'grey' ,}}> Not a member ?
    <Text style={{color:"orange" , fontWeight: 'bold',}}> Signup </Text> 
     </Text>

   </TouchableOpacity>
   



    </View>
    
    </ScrollView>

    </TouchableWithoutFeedback>

  );
}

