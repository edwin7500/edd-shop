import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function Login({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image 
        style={{
            width: 150,
            height: 150,
            borderRadius: 10,
            transform:[{rotate:"45deg"}],
            marginBottom: 50,
        }}
        source= {{uri:"https://images.unsplash.com/photo-1634033244119-9dce33e3aedb?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          }}
         />
   <Text style={{color: "rgba(0,0,0,0.6)", fontSize: 24}}> Welcome to </Text>
   <Text style={{color: "black", fontSize: 30, fontWeight: '600'}}> POWER BIKE SHOP  </Text>
   <TouchableOpacity  
     style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     paddingHorizontal: 60 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,}}>
         <AntDesign name="google" size={24} color="rgb(256,100,10)" />
    <Text style={{fontSize: 20 , marginLeft: 10 }}>Login With Gmail</Text>
    
   </TouchableOpacity>

   <TouchableOpacity 
   onPress={() => {
       navigation.navigate("Home")
      }}
   style={{backgroundColor: "black", 
     padding: 10,
     borderRadius: 10,
     flexDirection: 'row',
     paddingHorizontal: 60 ,
     marginTop: 20,}}>
         <AntDesign name="apple1" size={24} color="white"/>
    <Text style={{fontSize: 17, color: "white", marginLeft:10}}>Login With Apple</Text>
   </TouchableOpacity>

   <TouchableOpacity>
   <Text style={{marginTop:10, fontWeight: '500', color: 'grey'}}> Not a member ?
    <Text style={{color:"orange" , fontWeight: 'bold'}}> Signup </Text> 
     </Text>

   </TouchableOpacity>
   <View style={{flex: 1,flexDirection: "row", justifyContent:'space-between',alignItems:'center',backgroundColor:'blue'}}>
    <Ionicons name="ios-menu-outline" size={24} color="black" />
    <FontAwesome name="motorcycle" size={24} color="black" />
    <View style={{flexDirection:'row'}}>
    <AntDesign name="search1" size={24} color="black" />
    <Ionicons name="notifications-outline" size={24} color="black" />
    
      
    </View>
    </View>
    </View>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

 {/* <View>
      <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
      data={people}
      renderItem={({item}) => (
        <TouchableOpacity>
              <Text style={{ flex: 1,
              marginHorizontal: 10,
              marginTop: 24,
              padding: 30,
              backgroundColor: 'pink',
              fontSize: 24,}}>{item.name}

            </Text>
        </TouchableOpacity>
     

                 )}
               />
        </View> */}




           
{/* <View style={{padding:40}}>
   
   <Image source={foods.foods[food]} style={{width:300, height:250}}/> 

   <Text style={{}}>{name}</Text>  
    <Text>{price}</Text>
    <View style={{}}>
      <Image source={images.ratings[rating]}/>  
    </View>
     



    <View style={{
     justifyContent: "center",
     backgroundColor: 'white',
     alignItems: "center",
     borderTopStartRadius:80,
     backgroundColor: ' red',
     borderTopEndRadius:80 ,
     paddingTop: 550,
     bottom:10,
     padding: 40,
      justifyContent:'space-between',
      alignItems:'center',
      flexDirection: "row"
\\\



backgroundColor: 'white',
    //   alignItems: "center",
    //    borderTopStartRadius:80,
    //    borderTopEndRadius:80,
    //    flexDirection: "row",
    //    paddingHorizontal:150,
    //    paddingVertical:50,
    //    bottom:-290,
    //    justifyContent:'space-between',
    //    alignItems: "center",
    //    justifyContent: "center",
    }}>

<TouchableOpacity onPress={() => navigation.navigate('Home') }>
<AntDesign name="home" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Settings') }>
  <Ionicons name="settings-outline" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity>
  <Ionicons name="ios-menu-outline" size={24} color="black" />

  </TouchableOpacity>


     


      </View> 
</View> */}

<ImageBackground blurRadius={2} source ={{uri:"https://img.freepik.com/free-vector/hand-drawn-doodle-food-background_23-2148043106.jpg?size=338&ext=jpg"}} style={{
      backgroundColor: 'white',
      flex: 1,
      alignItems:'center',
      flexDirection: "row",
      width: 400,
      height:700,
    }}>



</ImageBackground>

import { Text, View, TouchableOpacity ,Image,ImageBackground} from 'react-native';
// import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
// import Card from '../routes/card';
// import { images ,foods} from '../styles/global';

// export default function Review({ navigation ,route}) {

// const {name , price ,rating, food} = route.params;

// return(
    
 
// <ImageBackground source ={{uri:"https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?b=1&k=20&m=1226478932&s=170667a&w=0&h=hXsvxQilNanpKx7QC_tIsFUOKPl8fdIDfJ_QSKXesGE="}} style={{
//       backgroundColor: 'white',
//       flex: 1,
//       alignItems:'center',
//       flexDirection: "row",
//       width: 400,
//       height:700,
      
//     }}>

// </ImageBackground>




// )}



<View style={{
    flex:1,
      backgroundColor: 'white',
      flexDirection: "row",
      alignItems: "center",
      justifyContent:'space-between',
       borderTopStartRadius:80,
       borderTopEndRadius:80,
       bottom:-270,
       margin: 1,
       marginTop:80,
       padding:40
      }}> 





<TouchableOpacity onPress={() => navigation.navigate('Home') }>
<AntDesign name="home" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Settings') }>
  <Ionicons name="settings-outline" size={24} color="black" />

  </TouchableOpacity>

  <TouchableOpacity>
  <Ionicons name="ios-menu-outline" size={24} color="black" />

  </TouchableOpacity>
</View> */}