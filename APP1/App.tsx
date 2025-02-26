import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FancyCard from './Components/FancyCard';
import FooterCustom from './Components/FooterCustom'; // Import FooterCustom

export type RootStackParamList = {
  Tabs: undefined; // Root is FooterCustom
  Fancy: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={FooterCustom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Fancy"
          component={FancyCard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
