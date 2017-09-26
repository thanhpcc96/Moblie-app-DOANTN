import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home/home';
import ProfileScreen from '../screens/profile/profile'

export default StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Profile: {
        screen: ProfileScreen
    }
});