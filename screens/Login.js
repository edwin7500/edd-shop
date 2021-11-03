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
  <ImageBackground blurRadius={10} source= {{uri:"https://i.ytimg.com/vi/Dg9TFXWvcWw/maxresdefault.jpg"}}
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
        source= {{uri:"https://library.kissclipart.com/20181209/wke/kissclipart-happy-pizza-png-clipart-pizza-steve-happys-pizza-b8c7f4a682ae6fb9.jpg"
          }}
         />
         
       <Text style={{color: "rgba(0,0,0,0.6)", 
       fontSize: 24 ,
        fontWeight: '900',
        color:'white',
         fontSize: 30,
         paddingBottom:50,
         fontStyle:"italic",
         marginBottom: 40,
         }}> PIZZA IN</Text>
        

         </View>
         </ImageBackground>
         
   <View style={{flex: 2,
    justifyContent: "center",
    backgroundColor: '#0C090A',
    alignItems: "center",
     borderTopStartRadius:80,
     borderTopEndRadius:80 ,
     paddingBottom: 50,
     bottom:70

    }}>

      <View style={{padding:5}}>
       
      </View>

      


   <Text style={{ marginTop: 15,color:'white',fontWeight: '900'
 }}>EMAIL OR USERNAME</Text>

   <TextInput style={{
    backgroundColor:"#e3e3e3" ,
    padding: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    margin:10,
    width:200,
    }} placeholder="eg.*****@gmail.com" /> 


   <Text style={{color:'white',fontWeight: '900',
}}>PASSWORD</Text>
   
   <TextInput secureTextEntry= {true} style={{
    backgroundColor:"#e3e3e3" ,
    padding: 16,
    borderWidth: 1,
    margin:10,
    borderStyle: 'dashed',
    width:200,
    }} placeholder="*******************" /> 

     <TouchableOpacity style={{borderRadius:60}} onPress={() => {
       navigation.navigate("Home")
      }}>
      <Text style={{backgroundColor: "#3EB489", 
     padding: 10,
     paddingHorizontal: 60 ,
     fontWeight: '900',
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,
     }}>SUBMIT</Text>
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
    <Text style={{fontSize: 20 ,fontWeight: '900',marginLeft: 10 }}>Login With Gmail</Text>
  
    

   </TouchableOpacity>

   <TouchableOpacity 
   
   style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     borderRadius: 60,
     flexDirection: 'row',
     paddingHorizontal: 60 ,
     marginTop: 20,}}>
         <AntDesign name="apple1" size={24} color="black"/>
    <Text style={{fontSize: 17, color: "black",fontWeight: '900',marginLeft:10}}>Login With Apple</Text>
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

