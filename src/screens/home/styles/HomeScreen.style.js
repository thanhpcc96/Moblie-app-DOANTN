// @flow
/* eslint-disable */
// import EStyleSheet from 'react-native-extended-stylesheet';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F5F3EE',
    width: '100%',
  },
  timerChuyenXe: {
    flex: 0.1,
    backgroundColor: '#4E94E5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerTimerText: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  containerIconBell: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTitle: {
    color: '#fff',
    fontSize: 22,
    position: 'absolute',
  },
  timeCountDown: {
    position: 'absolute',
    fontSize: 14,
    color: '#fff',
  },
  mainContainer: {
    flex: 0.9,
    backgroundColor: '#466',
  },
});
export default styles;
