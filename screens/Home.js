import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { Text, View ,Image, ImageBackground, StyleSheet,ScrollView,FlatList, TouchableOpacity, Button} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';



export default function Home({navigation}) {
  
  

  const [people, setPeople] = useState([
    { name: 'Pizza', id: 1, price: 'GHC 70' },
    { name: 'Ham Burger', id: 2, price: 'GHC 20' },
    { name: 'Fries', id: 3, price: 'GHC 15' },
    { name: 'Fried Chicken', id: 4, price: 'GHC10' },
    { name: 'Grilled Meat', id: 5, price: 'GHC 12' },
    { name: 'Chicken Burger', id: 6, price: 'GHC 20' },
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
      
<TouchableOpacity> 
 <Ionicons name="ios-menu-outline" size={24} color="black" />
 </TouchableOpacity>

 <TouchableOpacity>
 <AntDesign name="search1" size={24} color="black" />

 </TouchableOpacity>
 
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
                      fontSize: 24,
                      borderWidth:1,
                      width:160,
                      }}>{ item.name}
              </Text>
          </TouchableOpacity>
          )}
     /> 
   </View>

   <View style={{flex: 2,
    justifyContent: "center",
    backgroundColor: 'white',
    alignItems: "center",
     borderTopStartRadius:80,
     backgroundColor: '  #D1D0CE ',
     borderTopEndRadius:80 ,
     paddingBottom: 30,
     bottom:10,
     padding: 40,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection: "row"

    }}>

<TouchableOpacity>
<AntDesign name="home" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
  <Ionicons name="settings-outline" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity>
  <Ionicons name="ios-menu-outline" size={24} color="black" />

  </TouchableOpacity>


     


      </View> 


 </View> 


{/* <Button title='to action' onPress={() => {navigation.navigate('Review')  }}  />  */}
  




      </>
  );
}




