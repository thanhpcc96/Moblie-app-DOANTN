import React from 'react';
import Expo, { AppLoading } from 'expo';
import { AsyncStorage, UIManager } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Colors from './constains/color';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
EStyleSheet.build(Colors)

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text> Test man hinh chinh</Text>
      </View>
    );
  }
}
Expo.registerRootComponent(App);


