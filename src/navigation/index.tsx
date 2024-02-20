import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import LocationsScreen from '@screens/LocationsScreen';
import SettingsScreen from '@screens/SettingsScreen';

import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => (
  <>
    <Stack.Navigator
      screenOptions={{headerTitleAlign: 'center'}}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
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
  </>
);

export default RootNavigation;
