import React from 'react';
import { Text, View } from 'react-native';

export default function Review({ navigation }) {
return(
<View>
    <Text>{ navigation.getParam('name') }</Text>  
</View>

)}