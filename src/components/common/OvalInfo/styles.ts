import {StyleSheet} from 'react-native';

import {SCREEN_WIDTH} from 'src/utils/Dimensions';

const style = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: SCREEN_WIDTH / 2,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 10,
    paddingHorizontal: 20,
  },
  dangerBg: {
    backgroundColor: 'red',
  },
  heading: {
    fontFamily: 'SpaceMono-Bold',
    fontSize: 14,
    color: 'black',
  },
  subHeading: {
    fontSize: 13,
    color: 'black',
  },
});

export default style;
