import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { Text, View ,Image, ImageBackground, StyleSheet,ScrollView,FlatList, TouchableOpacity, Button} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';




export default function Home({navigation}) {
  

  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' },
    { name: 'eddy', id: '8' },
  ]);
  
  return (
    <><ImageBackground source ={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpH32AM5BFE7iTQMtVNhxl_net_-CkRZDWZw&usqp=CAU"}}style={{
      backgroundColor: 'white',
      flex: 1,
      padding: 20,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection: "row"
      
      
    }}>

 <Ionicons name="ios-menu-outline" size={24} color="black" />
 <AntDesign name="search1" size={24} color="black" />
 
    </ImageBackground> 
    <View style={{flex:7}}> 
      <Text style={{ fontSize: 24 , fontWeight: '600',marginLeft:130}}>B FOOD</Text>



       <View style={{paddingLeft:10}}>
  

    <FlatList numColumns ={2}
        data={people} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Review',item) }>
              <Text style={{ flex: 1,    
                      marginHorizontal: 10,
                      marginTop: 24,
                      padding: 30,
                      backgroundColor: 'pink',
                      fontSize: 24,}}>{ item.name}
              </Text>
          </TouchableOpacity>
          )}
     /> 
   </View>   
 </View> 


{/* <Button title='to action' onPress={() => {navigation.navigate('Review')  }}  />  */}
  




      </>
  );
}


