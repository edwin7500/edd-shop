import React from 'react';
import { Text, View, TouchableOpacity ,Image,ImageBackground} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Card from '../routes/card';
import { images ,foods} from '../styles/global';

export default function Review({ navigation ,route}) {

const {name , price ,rating, food} = route.params;

return(
    
 
<ImageBackground source ={{uri:"https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE="}} style={{
      backgroundColor: 'white',
      flex: 1,
      alignItems:'center',
      flexDirection: "row",
      width: 400,
      height:700,
      
    }}>

</ImageBackground>




)}