import React from 'react';
import { Text, View ,ImageBackground, TouchableOpacity} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';


export default function Settings({navigation}) {


return(
  

<ImageBackground source ={{uri:"https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE="}} style={{
      backgroundColor: 'white',
      flex: 1,
      alignItems:'center',
      flexDirection: "row",
      width: 400,
      height:700,
      
    }}>
      <View style={{flex: 2,
    justifyContent: "center",
    backgroundColor: 'white',
    alignItems: "center",
     borderTopStartRadius:80,
     borderTopEndRadius:80,
    //  backgroundColor: '  #D1D0CE ',
     paddingBottom: 50,
     bottom:-300,
     padding: 40,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection: "row"

    }}>

<TouchableOpacity onPress={() => navigation.navigate('Home')}>
<AntDesign name="home" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
  <Ionicons name="settings-outline" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity>
  <Ionicons name="ios-menu-outline" size={24} color="black" />

  </TouchableOpacity>


     


      </View> 

      </ImageBackground>

      

)}

