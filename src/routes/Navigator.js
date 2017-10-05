import React from 'react';
import { StackNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import Touchable from '@appandflow/touchable';
import styled from 'styled-components';

import HomeNavigator from './HomeNavigator';

import Colors from '../../constains/color';

export default StackNavigator({
    Home: { screen: HomeNavigator }
});
