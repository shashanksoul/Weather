import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  circleContainer: {
    flexDirection: 'row',
    borderStartColor: 'red',
    marginTop: -50,
  },
  circle: {
    backgroundColor: 'black',
    height: 20,
    width: 20,
    marginHorizontal: 5,
    borderRadius: 10,
    opacity: 0.5,
  },
});

export default style;
