import { Text, View, TouchableOpacity ,Image,ImageBackground,FlatList} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import React from 'react';
import { images ,foods} from '../styles/global';
import Cards from '../routes/cards';


export default function Review({ navigation ,route}) {


const {name , price ,rating, food} = route.params;

return(   

    
 

<ImageBackground blurRadius={2} source ={{uri:"https://media.istockphoto.com/vectors/abstract-navy-background-vector-id1146367630?k=20&m=1146367630&s=612x612&w=0&h=Ul1uZFXLlpgro0N8Jm5zk-z_TBVuUMwbHAFeF41bLkg="}} style={{
      backgroundColor: 'white',
      flex: 1,
      alignItems:'center',
      flexDirection: "row",
      width: 400,
      height:700,
    }}>
      

<View style={{padding:30}}>
<Image  source={foods.foods[food]} style={{width:300, height:250, borderRadius:40}}/> 

   <Text style={{fontWeight:'900',color:'white',paddingTop:16,textAlign:'center'}}>{name}</Text>  
    <Text style={{fontWeight:'900',color:'white',textAlign:'center'}}>{price}</Text>
    <View style={{paddingLeft:100}}>
      <Image style={{}} source={images.ratings[rating]}/>  
    </View>

    <TouchableOpacity  
    onPress={() => navigation.navigate('Cart')}
     style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     paddingHorizontal: 50 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,}}>
         {/* <AntDesign name="google" size={24} color="rgb(256,100,10)" /> */}
         <AntDesign name="shoppingcart" size={24} color="black" />

    <Text style={{fontSize: 20 , marginLeft: 10, fontWeight:'900' }}>ADD TO CART</Text>
  
    

   </TouchableOpacity>
    </View> 


         

</ImageBackground>




)}