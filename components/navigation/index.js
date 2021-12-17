import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import NewProgram from '../../screens/NewProgram';
import Program from '../../screens/Program';
import SingleWorkout from '../../screens/SingleWorkout';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SingleProgram from '../../screens/SingleProgram';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 65,
          height: 65,
          borderRadius: 20,
          backgroundColor: '#000000',
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarButton: ['Single', 'SingleProgram'].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          elevation: 0,
          right: 20,
          left: 20,
          backgroundColor: '#08085E',
          height: 60,
          borderRadius: 15,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../assets/icons/home.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#FC997C' : '#ECECEB',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Program"
        component={Program}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../../assets/icons/program.png')}
                resizeMode="contain"
                style={{
                  width: 35,
                  height: 35,
                  tintColor: focused ? '#FC997C' : '#ECECEB',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Single"
        component={SingleWorkout}
        options={{
          headerShown: false,
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="SingleProgram"
        component={SingleProgram}
        options={{
          headerShown: false,
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
