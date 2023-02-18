import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text, View, SafeAreaView, Dimensions, Button} from 'react-native';


const Stack = createNativeStackNavigator();
import Home from './home';
import Options	 from './options';


const Index = () => {
  return (
  	<SafeAreaView style={{width:Dimensions.get('window').width}}>
    

    <Text>
    Hll
    </Text>
    
    

  	</SafeAreaView>

  );
};

export default Index;		