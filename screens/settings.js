import React,{useState} from 'react';
import { Text, View ,ImageBackground, TouchableOpacity,ActivityIndicator} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Switch } from 'react-native-gesture-handler';


export default function Settings({navigation}) {

const [isSwitchEnable, setSwitch ] = React.useState(false)

return(
  

<ImageBackground source ={{uri:"https://qph.fs.quoracdn.net/main-qimg-d3c5e4b2cec54046167d4259006eca11"}} style={{
      backgroundColor: 'white',
      flex: 1,
      width: 400,
      height:700,
      justifyContent: "center",

    }}>

      <View style={{flex:2,
        padding:2,
        
        }}>


      <View style={{alignItems: "center",
      alignItems:'baseline'
}}> 
      <TouchableOpacity  
     style={{backgroundColor: "#e3e3e3", 
     padding: 5,
     paddingHorizontal: 47 ,
     flexDirection: 'row',
     borderRadius: 40 ,
     marginTop: 20,
     }}>
    <Text style={{fontSize: 20 ,fontWeight: '900',marginLeft: 10 }}>Languages</Text>


   </TouchableOpacity>

<View style={{flexDirection:'row',alignContent:'space-between',alignItems:'flex-end'}}>
   <View 
     style={{backgroundColor: "#e3e3e3", 
     padding: 5,
     paddingHorizontal: 20 ,
     flexDirection: 'row',
     alignContent:'space-between',
     borderRadius: 40 ,
     marginTop: 12,
     }}>
    <Text style={{fontSize: 20 ,fontWeight: '900',marginLeft: 10 }}>Dark Mode   </Text>

    <Switch 
    value={isSwitchEnable}
    onValueChange={(value) => setSwitch(value)} 
    /> 
    </View>
    

    


</View>

{/* <ActivityIndicator size="large" color="#ff0000" /> */}

  
     </View>



      {/* <TouchableOpacity style={{padding:20, borderWidth:2}}>
      <Text style={{fontSize:25,fontWeight:'500'}}>language</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={{padding:20, borderWidth:2}}>
      <Text style={{fontSize:25,fontWeight:'500'}}>language</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={{padding:20, borderWidth:2}}>
      <Text style={{fontSize:25,fontWeight:'500'}}>ASK A QUESTION</Text>
      </TouchableOpacity> */}



     
        
      </View>








     
      </ImageBackground>

      

)}

