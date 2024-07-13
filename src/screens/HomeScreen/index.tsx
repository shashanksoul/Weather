import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

import BasicInfo from '@components/BasicInfo';
import CircleInfo from '@components/common/CircleInfo';
import OvalInfo from '@components/common/OvalInfo';
import ProgressBar from '@components/common/ProgressBar';
import TodayForecast from '@components/TodayForecast';

import style from './styles';
import {HomeScreenProps} from './types';
import WeekForecast from '@components/WeekForecast';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  navigation.setOptions({
    headerShadowVisible: false,
  });
  return (
    <View style={style.container}>
      <Image
        tintColor="black"
        style={style.image}
        resizeMode="contain"
        source={require('../../assets/images/full_cloud.png')}
      />
      <Text style={style.weatherTitle}>HAZY CLOUDS</Text>
      <BasicInfo />
      <TodayForecast />
      <WeekForecast />
    </View>
  );
};

export default HomeScreen;
