import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

import style from './styles';

type WeekForecastItemProps = {
  icon: ImageSourcePropType;
  temperature: string;
  maxTemperature: string;
};

const WeekForecastItem: React.FC<WeekForecastItemProps> = ({
  icon,
  temperature,
  maxTemperature,
}) => {
  const title = 'MON';
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Image tintColor="black" style={style.image} source={icon} />
      <Text style={style.temp}>{`${temperature}º`}</Text>
      <Text style={style.maxTemp}>{`${maxTemperature}º`}</Text>
    </View>
  );
};

export default WeekForecastItem;
