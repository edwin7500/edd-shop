import React from 'react';
import { Text, View ,ImageBackground, TouchableOpacity} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Cart({navigation}) {


return(
  

<ImageBackground source ={{uri:"https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE="}} style={{
      backgroundColor: 'white',
      flex: 1,
      width: 400,
      height:700,
      
    }}>

      <View style={{flex:2}}>

      <TouchableOpacity>
      <Text>language</Text>
      </TouchableOpacity>

      <TouchableOpacity>
      <Text>language</Text>

        </TouchableOpacity>

        <TouchableOpacity>
        <Text>language</Text>

        </TouchableOpacity>
        
      </View>








    

      </ImageBackground>

      

)}

