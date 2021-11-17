import React from "react";
import { Text, View} from 'react-native';

export default function Cartcard({title , subtitle}) {
 return (

<View style={{marginTop:32, justifyContent:'space-between'}}>
   <View style={{width:124,height:121,borderRadius: 20,backgroundColor:'red'}}>
       <View style={{marginLeft:16}}>
<Text>  {title}</Text>
<Text></Text>
       </View>
  </View>  
</View>

);
}
