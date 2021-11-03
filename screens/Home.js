import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { Text, View ,Image, ImageBackground, StyleSheet,ScrollView,FlatList, TouchableOpacity, Button,TextInput} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Card from '../routes/card';
import { images ,foods} from '../styles/global';



export default function Home({navigation}) {
  
  

  const [people, setPeople] = useState([
    { name: 'chicken Pizza', id: 1, price: 'GHC 70',rating:5 ,food: 1,},
    { name: 'meat Pizza', id: 2, price: 'GHC 20',rating:2,food:2  },
    { name: 'Mushroom Pizza', id: 3, price: 'GHC 15',rating:4,food:3   },
    { name: 'pepperoni Pizza', id: 4, price: 'GHC10',rating:1,food:4   },
    { name: 'Cheese Pizza', id: 5, price: 'GHC 12' ,rating:3,food:5  },
    { name: 'Ham Pizza', id: 6, price: 'GHC 20',rating:5 ,food:6  },
  ]);
  
  return (
    <><ImageBackground source ={{}} style={{
      backgroundColor: 'white',
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection: "row"
      
      
    }}>
      


 

    </ImageBackground> 

    <ImageBackground blurRadius={4} source ={{uri:"https://comps.gograph.com/fast-food-seamless-pattern-hand-drawn-food-background-background-template-for-restaurant-design-menu-pattern_gg83623744.jpg"}} style={{
      backgroundColor: 'white',
      flex: 7,
      alignItems:'center',
      flexDirection: "row"
      
      
    }}>

    <View style={{flex:7}} > 

    
<View style={{flexDirection:'row',
              justifyContent:'space-between',
}}> 


  <TouchableOpacity style={{padding:20,flexDirection:'row'}}>
    
 <AntDesign name="search1" size={24} color="white" style={{paddingHorizontal:20,paddingTop:10}}/>
<TextInput style={{
  backgroundColor:"#e3e3e3" ,
  padding: 10,
  borderWidth: 2,
  width:200,
  borderRadius:20
  }}/>  
 </TouchableOpacity>

 

</View>
    
<Text style={{color:'white',fontSize:24,fontWeight:'900',textAlign:'center'}}>
  WELCOME TO 
</Text>
<Text style={{color:'white',fontSize:24,fontWeight:'900',textAlign:'center',paddingBottom:30}}>
   PIZZA IN 
</Text>


       <View style={{paddingLeft:10}}>
  

    <FlatList numColumns ={2}
        data={people} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Review',item) }>
              
              <Card>
              <Text style={{ flex: 1,    
                      // marginHorizontal: 10,
                      // marginTop: 24,
                       padding: 30,
                      // backgroundColor: 'pink',
                      // fontSize: 24,
                      // borderWidth:1,
                       width:150,
                      }}>
                    { item.name}
                    
              </Text> 

              </Card>
          </TouchableOpacity>
          )}
     /> 
   </View>

   <View style={{alignItems:"center",justifyContent:'center'}}>

   </View>

   <View style={{flex: 2,
    justifyContent: "center",
    backgroundColor: 'black',
    alignItems: "center",
     borderTopStartRadius:80,
     borderTopEndRadius:80,
    //  backgroundColor: '  #D1D0CE ',
     paddingBottom: 120,
     bottom:-120,
     padding: 30,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection: "row"

    }}>

<TouchableOpacity>
<AntDesign name="home" size={24} color="white" />

  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
  <Ionicons name="settings-outline" size={24} color="white" />

  </TouchableOpacity>

  <TouchableOpacity>
  {/* <Ionicons name="ios-menu-outline" size={24} color="black" /> */}
  <AntDesign name="shoppingcart" size={24} color="white" />


  </TouchableOpacity>


     


      </View> 


 </View> 

 </ImageBackground>
{/* <Button title='to action' onPress={() => {navigation.navigate('Review')  }}  />  */}
  




      </>
  );
}




