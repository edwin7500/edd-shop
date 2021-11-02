import { Text, View, TouchableOpacity ,Image,ImageBackground,FlatList} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import React from 'react';
import Card from '../routes/card';
import { images ,foods} from '../styles/global';

export default function Review({ navigation ,route}) {

const {name , price ,rating, food} = route.params;

return(   

    
 

<ImageBackground blurRadius={2} source ={{uri:"https://img.freepik.com/free-vector/hand-drawn-doodle-food-background_23-2148043106.jpg?size=338&ext=jpg"}} style={{
      backgroundColor: 'white',
      flex: 1,
      alignItems:'center',
      flexDirection: "row",
      width: 400,
      height:700,
    }}>
      
<Card>
<View style={{padding:30}}>
<Image source={foods.foods[food]} style={{width:300, height:250}}/> 

   <Text style={{}}>{name}</Text>  
    <Text>{price}</Text>
    <View style={{}}>
      <Image source={images.ratings[rating]}/>  
    </View>

    <TouchableOpacity  
     style={{backgroundColor: "#e3e3e3", 
     padding: 10,
     paddingHorizontal: 50 ,
     flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 10 ,
     marginTop: 20,}}>
         {/* <AntDesign name="google" size={24} color="rgb(256,100,10)" /> */}
         <AntDesign name="shoppingcart" size={24} color="black" />

    <Text style={{fontSize: 20 , marginLeft: 10 }}>ADD TO CART</Text>
  
    

   </TouchableOpacity>
    </View> 
</Card>

        

</ImageBackground>




)}