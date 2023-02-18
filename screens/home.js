import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Dimensions} from 'react-native';

import { StyleSheet, Text, View,SafeAreaView, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"; 
const Stack = createStackNavigator();

import { useNavigation } from "@react-navigation/native";




const Home = ({navigation}) => {
  const moveOptions = () => {
    navigation.navigate("Profile");
  }
  return (
        <View style={styles.app}>
        <View style={styles.top}>
          <Text style={styles.heading}>
            Sussexxy App!
          </Text>
          <Text style={styles.heading}>
            (Our Logo goes here)
          </Text>

        </View>
        <View style={styles.bottom}>
        
        <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={moveOptions}>
          <Text style={styles.buttonTxt}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Register</Text>
        </TouchableOpacity><TouchableOpacity style={styles.button}>
          <Text style={styles.buttonTxt}>Options</Text>
        </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const styles = {
  app: {
    flex: 4, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: windowWidth,
    backgroundColor: "#07528b"
  },
  top:{
    height: windowHeight/3,
    backgroundColor:'white',
    alignItems:'center'
  },
  bottom:{



  },
  buttonView:{
    width:'100%',
    justifyContent:'center',
    padding:25,
    paddingTop:50,

  },
  buttonTxt:{
    fontSize:25
  },
  button:{ 
    height: 100, 
    marginTop: 10, 
    backgroundColor:'white', 
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
},
  heading:{

    fontSize:25
  },
  row: {
    flexDirection: "row",
    padding:5,
    height:windowHeight/4,
    justifyContent:'center'

  },
  "1col":  {
    backgroundColor:  "lightblue",
    borderColor:  "#fff",
    flex:  1
  },
  "2col":  {
    backgroundColor:  "white",
    flex:  2,
    alignItems:'center',
    justifyContent:'center',
    margin:5
  },
  "3col":  {
    backgroundColor:  "orange",
    borderColor:  "#fff",
    borderWidth:  1,
    flex:  3
  },
  "4col":  {
    flex:  4
  }
};		

export default Home;