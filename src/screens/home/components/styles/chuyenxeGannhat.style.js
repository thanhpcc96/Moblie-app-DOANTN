// @ flow
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#4E94E5',
    paddingHorizontal: '2.5%',
    paddingVertical: '2.5%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontFamily: 'montserratBold',
    fontSize: 17,
    position: 'absolute',
    bottom: '2.5%',
  },
  description: {
    fontFamily: 'montserratBold',
    fontSize: 13,
  },
  IconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
