/* eslint-disable */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#4E94E5',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerTimerText: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  containerIconBell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeTitle: {
    color: '#fff',
    fontSize: 22,
    //position: 'absolute',
  },
  timeCountDown: {
    fontSize: 14,
    color: '#fff',
  },
  mainContainer: {
    flex: 0.9,
    backgroundColor: '#466',
  },
});
export default styles;
