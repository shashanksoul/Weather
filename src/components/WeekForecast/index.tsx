import React from 'react';
import {FlatList, Text, View} from 'react-native';

import TodayForecastItem from '@components/TodayForecastItem';

import style from './styles';
import WeekForecastItem from '@components/WeekForecaseItem';

const WeekForecast: React.FC = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 145, 59, 45];
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        bounces={false}
        style={style.flatList}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.container}
        renderItem={() => (
          <WeekForecastItem
            icon={require('../../assets/images/rain.png')}
            maxTemperature="37"
            temperature="28"
          />
        )}
      />
    </View>
  );
};

export default WeekForecast;
