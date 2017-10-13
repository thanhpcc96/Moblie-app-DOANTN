// @flow
import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles/chuyenxeGannhat.style';
import colors from '../../../utils/constants'
/**
 *  list chuyến xe mà người đó sắp đi
 * loại trừ những chuyến người đó hủy
 */
const chuyenXeSapDi = ({ Chuyen }) => (
  <View style={styles.root}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>Ha Noi Hai Phong {Chuyen.tenChuyen}</Text>
      <Text style={styles.description}>Thoi gian con lai {Chuyen.time}</Text>
    </View>
    <View style={styles.IconContainer}>
      <Ionicons color={colors.whiteColor} name="ios-notifications" size={22} />
    </View>
  </View>
);
