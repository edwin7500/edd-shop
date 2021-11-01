import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


export default function Review({ navigation ,route}) {

const {name , price } = route.params;

return(
    
    
<View style={{padding:40}}>
    <Text>{name}</Text>  
    <Text>{price}</Text>  



    <View style={{
     justifyContent: "center",
     backgroundColor: 'white',
     alignItems: "center",
     borderTopStartRadius:80,
     backgroundColor: ' red',
     borderTopEndRadius:80 ,
     paddingTop: 550,
     bottom:10,
     padding: 40,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection: "row"

    }}>

<TouchableOpacity onPress={() => navigation.navigate('Home') }>
<AntDesign name="home" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Settings') }>
  <Ionicons name="settings-outline" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity>
  <Ionicons name="ios-menu-outline" size={24} color="black" />

  </TouchableOpacity>


     


      </View> 
</View>



)}