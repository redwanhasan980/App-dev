import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './Components/FlatCards';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';
import CategoryCard from './Components/CategoryCard';
import HyperMenu from './Components/HyperCar/HyperMenu';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type RootStackParamList = {
  Fancy: undefined;
  CategoryCard: undefined;
  HyperMenu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CategoryCard">
        <Stack.Screen
          name="CategoryCard"
          component={CategoryCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Fancy"
          component={FancyCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HyperMenu"
          component={HyperMenu}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
