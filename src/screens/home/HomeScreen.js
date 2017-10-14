// @flow
/*eslint-disable */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles/HomeScreen.style';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.timerChuyenXe}>
          <View style={styles.containerTimerText}>
            <Text style={styles.timeTitle}> Ha noi hai phong</Text>
            <Text style={styles.timeCountDown}> Con lai 10h</Text>
          </View>
          <View style={styles.containerIconBell}>
              <Ionicons name="ios-notifications" color={'#fff'} size={30} />
          </View>
        </View>
        <View style={styles.mainContainer}>
          <Text>Demo</Text>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
