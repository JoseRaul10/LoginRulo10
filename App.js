import React from 'react';
import { Button, View, Text} from 'react-native';
import Login from './screens/login';
import Registro from './screens/registro'; 
import Usuario from './screens/Usuario';
import Principal from './screens/Principal';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Usuario" component={Usuario} />
        <Stack.Screen name='Principal' component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;