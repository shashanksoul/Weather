import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

import dayjs from 'dayjs';
import {isCurrentTime} from 'src/utils/TimeUtils';

import style from './styles';

type TodayForecastItemProps = {
  time: string;
  icon: ImageSourcePropType;
  temperature: string;
};

const TodayForecastItem: React.FC<TodayForecastItemProps> = ({
  time,
  icon,
  temperature,
}) => {
  const isCurrent = isCurrentTime(time);
  const title = isCurrent ? 'Now' : dayjs(time).format('h A');
  return (
    <View style={style.container}>
      <Text style={isCurrent && style.title}>{title}</Text>
      <View style={style.tempContainer}>
        <Image tintColor="black" style={style.image} source={icon} />
        <Text style={style.temp}>{`${temperature}º`}</Text>
      </View>
    </View>
  );
};

export default TodayForecastItem;
