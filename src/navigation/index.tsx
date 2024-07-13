/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import LocationsScreen from '@screens/LocationsScreen';
import SettingsScreen from '@screens/SettingsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const navRef =
    React.useRef<NavigationContainerRef<ReactNavigation.RootParamList>>(null);
  return (
    <NavigationContainer ref={navRef}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#D7D9D8'},
        }}
        initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            animation: 'slide_from_right',
            headerLeft: () => (
              <Icon
                name="menu"
                color="black"
                size={25}
                onPress={() => navRef.current?.navigate('Locations')}
              />
            ),
            headerRight: () => (
              <Icon
                name="cog-outline"
                color="black"
                onPress={() => navRef.current?.navigate('Settings')}
                size={25}
              />
            ),
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{headerShown: false, animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Locations"
          component={LocationsScreen}
          options={{animation: 'slide_from_left'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
