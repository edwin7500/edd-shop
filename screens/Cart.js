import { Text, View, TouchableOpacity ,TextInput,ImageBackground,FlatList} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import React from 'react'

export default function cart ({navigation}){
return(

  <View style= {{flexDirection: "",
  justifyContent: "center",
  marginTop: 30,
  margin: 10}}>
  <Text style ={{fontSize: 20, textAlign: "center", fontWeight: "bold", justifyContent:"space-between"}}>Carts</Text>


  <TextInput style={{
    borderBottomWidth:2,
    borderColor:'black',
    color:'black',
    width:500,
    }}/> 


<View>  


  
  <TouchableOpacity 
   onPress={() => {
    navigation.navigate("Checkout")
   }}
  style = {{   backgroundColor: "#FF6C00",
        marginTop: 500,
        padding: 15,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal:50
        
  }}>
      <Text style ={{textAlign: "center", color: "#fff", fontSize: 30, fontWeight: "bold"}}>Buy</Text>
      </TouchableOpacity>

                </View>






  </View>

);

}