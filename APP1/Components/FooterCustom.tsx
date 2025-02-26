import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoryCard from './CategoryCard';
import Profile from './Profile';
import Community from './Community';
import HyperMenu from './HyperCar/HyperMenu'; // Import HyperMenu
import {Image, View, Text, StyleSheet} from 'react-native';
import {assets} from '../react-native.config';
import Test from './Test';
// Create Stack Navigator for the Home tab
const HomeStack = createNativeStackNavigator();

// Define the HomeStackNavigator component
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="CategoryCard"
        component={CategoryCard}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="HyperMenu"
        component={HyperMenu}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const FooterCustom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // Example screenOptions (tabBar style, icon, etc.)
        tabBarStyle: {
          backgroundColor: '#ffffff',
          position: 'absolute',

          elevation: 6,
          height: 60,
          borderRadius: 15,
        },
        tabBarShowLabel: false,
      }}>
      {/* Pass HomeStackScreen as the component to Tab.Screen */}

      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={pageStyle.footerContainer}>
              <Image
                source={require('./asset/Home.png')}
                resizeMode={'contain'}
                style={[
                  pageStyle.Icon,
                  {
                    tintColor: focused ? '#e32f45' : '#748c94',
                  },
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Community"
        component={Community}
        options={{
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View style={pageStyle.footerContainer}>
              <Image
                source={require('./asset/community.png')}
                resizeMode={'contain'}
                style={[
                  pageStyle.Icon,
                  {
                    tintColor: focused ? '#e32f45' : '#748c94',
                  },
                ]}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={pageStyle.footerContainer}>
              <Image
                source={require('./asset/profile.png')}
                resizeMode={'contain'}
                style={[
                  pageStyle.Icon,
                  {
                    tintColor: focused ? '#e32f45' : '#748c94',
                  },
                ]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const pageStyle = StyleSheet.create({
  Icon: {
    width: 25,
    height: 25,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  IconText: {
    fontSize: 11,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FooterCustom;
