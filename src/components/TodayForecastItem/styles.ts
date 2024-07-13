import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: 'black',
  },
  tempContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  image: {height: 30, width: 30},
  temp: {
    fontSize: 18,
    color: 'black',
    marginHorizontal: 5,
  },
});

export default style;
