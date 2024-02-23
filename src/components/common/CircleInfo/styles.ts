import {StyleSheet} from 'react-native';

import {SCREEN_WIDTH} from 'src/utils/Dimensions';

const circleWidth = SCREEN_WIDTH / 2;

const style = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
    borderRadius: circleWidth / 1,
    width: circleWidth - 40,
    height: circleWidth - 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'SpaceMono-Regular',
    fontSize: 14,
    color: 'white',
  },
  temp: {
    fontFamily: 'SpaceMono-Regular',
    fontSize: 40,
    color: 'white',
  },
  hiLowTemp: {
    fontSize: 14,
    color: 'white',
  },
});

export default style;
