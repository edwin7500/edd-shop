import React from 'react';
import { View } from 'react-native';

export default function Cards(props) {
return(
    <View style={{borderRadius:6,
    elevation:3,
    backgroundColor:"black",
    shadowOffset:{width:3,height:3},
    shadowColor:'#333',
    shadowOpacity: 0.3,
    shadowRadius:2,
    marginHorizontal:4,
    marginVertical:6,
    }}>
       <View style={{marginHorizontal:18,
    marginHorizontal:10,
    }}>
          {props.children}
       </View>
    </View>
)}