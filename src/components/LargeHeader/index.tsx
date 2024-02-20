import React from 'react';
import {Text} from 'react-native';

import {LargeHeader, ScalingView} from '@codeherence/react-native-header';

import styles from './styles';
import {LargeHeaderProps} from './types';

const LargeHeaderComponent: React.FC<LargeHeaderProps> = ({scrollY, title}) => {
  return (
    <LargeHeader>
      <ScalingView scrollY={scrollY}>
        <Text style={styles.headerTitle}>{title}</Text>
      </ScalingView>
    </LargeHeader>
  );
};
export default LargeHeaderComponent;
