import React from 'react';
import {View} from 'react-native';

import CircleInfo from '@components/common/CircleInfo';
import OvalInfo from '@components/common/OvalInfo';

import style from './styles';

const BasicInfo: React.FC = () => {
  return (
    <View style={style.container}>
      <CircleInfo temperature="26" high="28" low="17" />
      <View>
        <OvalInfo
          isDanger
          heading="Air quality 167"
          subHeading="very unhealthy"
        />
        <OvalInfo heading="UV INDEX 00" subHeading="Low" />
      </View>
    </View>
  );
};

export default BasicInfo;
