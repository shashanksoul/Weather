import React from 'react';
import {Text, View} from 'react-native';

import style from './styles';

type OvalInfoProps = {
  heading: string;
  subHeading: string;
  isDanger?: boolean;
};
const OvalInfo: React.FC<OvalInfoProps> = ({
  heading,
  subHeading,
  isDanger = false,
}) => {
  return (
    <View
      testID="oval-view"
      style={isDanger ? [style.container, style.dangerBg] : style.container}>
      <Text
        testID="heading-text"
        style={isDanger ? [style.heading, {color: 'white'}] : style.heading}>
        {heading.toUpperCase()}
      </Text>
      <Text
        testID="subHeading-text"
        style={
          isDanger ? [style.subHeading, {color: 'white'}] : style.subHeading
        }>
        {subHeading}
      </Text>
    </View>
  );
};

export default OvalInfo;
