import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { Text, View ,Image, ImageBackground, StyleSheet,ScrollView,FlatList, TouchableOpacity, Button,TextInput} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Card from '../routes/card';
import { images ,foods} from '../styles/global';



export default function Home({navigation}) {
  
  

  const people = [
    { name: 'chicken Pizza', id: 1, price: 'GHC 70',rating:5 ,food: 1,img: {uri:'https://i.ndtvimg.com/i/2015-02/meat-pizza_625x350_41424681507.jpg'}},
    { name: 'meat Pizza', id: 2, price: 'GHC 20',rating:4,food:2,     img: {uri:'https://www.queensleeappetit.com/wp-content/uploads/2019/02/Meat-Lovers-Pizza-5-1-480x360.jpg'}  },
    { name: 'Mushroom Pizza', id: 3, price: 'GHC 15',rating:2,food:3 ,img: {uri:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/12/20/0/FNK_Gluten-Free-Mushroom-Ricotta_Pizza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1483737096931.jpeg'}  },
    { name: 'pepperoni Pizza', id: 4, price: 'GHC10',rating:4,food:4 ,img: {uri:'https://i.ndtvimg.com/i/2018-02/pepperoni_620x350_61517464056.jpg'}  },
    { name: 'Cheese Pizza', id: 5, price: 'GHC 12' ,rating:3,food:5 ,img: {uri:'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900'} },
    { name: 'Ham Pizza', id: 6, price: 'GHC 20',rating:5 ,food:6 ,img: {uri:'https://s3.envato.com/files/261152674/DR_150124_8600.jpg'} },
    { name: 'Beef Pizza', id: 7, price: 'GHC 70',rating:4 ,food:7 ,img: {uri:'https://coneti.org/storage/2020/09/beef-pizza.jpg'} },
    { name: 'Vege Pizza', id: 8, price: 'GHC 90',rating:3 ,food:8 ,img: {uri:'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/4491fa4b-af74-4aa3-a0cd-21afca99b93e.jpg'} },

  ];
  
  return (
    <><ImageBackground blurRadius={4} source ={{uri:"https://ak6.picdn.net/shutterstock/videos/1019308096/thumb/1.jpg?ip=x480"}} style={{
      backgroundColor: 'white',
      flex: 1,
      alignItems:'center',
    }}>

    <View style={{flex:1}} > 

    
<View style={{
            flexDirection:'row',
            alignContent:'space-between'
            }}> 

<TouchableOpacity style={{padding:30}} onPress={() => navigation.navigate('Settings')}>
  <Ionicons name="settings-outline" size={24} color="white" />

  </TouchableOpacity>

  <TouchableOpacity style={{padding:20,flexDirection:'row'}}>
    
<TextInput placeholder='search' style={{
  backgroundColor:"#e3e3e3" ,
  padding: 10,
  borderWidth: 2,
  width:200,
  borderRadius:20,
  
  }}/>  
 </TouchableOpacity>

 <TouchableOpacity style={{padding:30,paddingHorizontal:10}} onPress={() => navigation.navigate('Cart')}>
 <AntDesign name="shoppingcart" size={24} color="white" />

 </TouchableOpacity>

</View>


   <View style={{}}> 
<Text style={{color:'white',fontSize:24,fontWeight:'900',textAlign:'center'}}>
  WELCOME TO 
</Text>
<Text style={{color:'white',fontSize:24,fontWeight:'900',textAlign:'center',paddingBottom:30}}>
   PIZZA IN 
</Text>
</View>

       <View style={{paddingLeft:10}}>
  

    <FlatList numColumns ={2}
        data={people} renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Review',item) }>
              
              <Card>
              <Text style={{ flex: 1,    
                      // marginHorizontal: 10,
                      // marginTop: 24,
                       padding: 10,
                      // backgroundColor: 'pink',
                      // fontSize: 24,
                      // borderWidth:1,
                       width:150,
                      }}>
                    { item.name}
                    
              </Text> 
              <View style={{paddingBottom:15}}> 
              <Image source={item.img} style={{width:140,height:50}}/>
              </View>

              </Card>
          </TouchableOpacity>
          )}
     /> 
   </View>
 </View> 

 </ImageBackground>
{/* <Button title='to action' onPress={() => {navigation.navigate('Review')  }}  />  */}
  




      </>
  );
}




