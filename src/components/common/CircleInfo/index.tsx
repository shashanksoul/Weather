import React from 'react';
import {Text, View} from 'react-native';

import style from './styles';

type CircleBaseProps = {
  temperature: string;
  isFeelsLike?: boolean;
};
type CircleExtendedProps = CircleBaseProps & {
  isFeelsLike: false;
  low: string;
  high: string;
};

type CircleInfoProps = CircleBaseProps | CircleExtendedProps;

const CircleInfo: React.FC<CircleInfoProps> = props => {
  if (props.isFeelsLike) {
    return (
      <View testID="circle-view" style={style.container}>
        {props.isFeelsLike && (
          <Text testID="feel-like-text" style={style.label}>
            FEELS LIKE
          </Text>
        )}
        <Text testID="temperature-text" style={style.temp}>
          {`${props.temperature}º`}
        </Text>
      </View>
    );
  } else {
    const {low, high} = props as CircleExtendedProps;
    return (
      <View testID="circle-view" style={style.container}>
        <Text testID="temperature-text" style={style.temp}>
          {`${props.temperature}º`}
        </Text>
        <Text
          testID="hi-low-text"
          style={style.hiLowTemp}>{`H: ${high}º L: ${low}º`}</Text>
      </View>
    );
  }
};

export default CircleInfo;
