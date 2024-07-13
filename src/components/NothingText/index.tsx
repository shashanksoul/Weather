import React from 'react';
import { StyleSheet } from 'react-native';

import {Text} from 'react-native-reanimated/lib/typescript/Animated';

type NothingTextProps = {
  title: string;
  weight: 
};

const NothingText: React.FC<NothingTextProps> = ({title}) => {
  return <Text>{title}</Text>;
};

const style = StyleSheet.create({
    text: {
        fontFamily: 'SpaceMono-Regular',
        fontWeight: '200',
    }
})

export default NothingText;
