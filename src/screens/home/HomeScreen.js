// @flow
/*eslint-disable */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// import Component
import TimerNotification from './components/TimerNotification';

import styles from './styles/HomeScreen.style';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.timerNotification}>
          <TimerNotification />
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.mainImageAvatar}>
            <ImageBackground
              source={{
                uri:
                  'http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16123158-500-313.jpg',
              }}
              style={styles.avata}
            />
          </View>
          <View>

          </View>
          <View style={styles.statusClient}>
              <Text style={styles.textNameClient}>Thanh Pham</Text>

          </View>
          <View style={styles.mainMenuPrimary}>
            <ScrollView />
          </View>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
