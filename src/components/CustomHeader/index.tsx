import React from 'react';
import {Text} from 'react-native';

import {Header, ScrollHeaderProps} from '@codeherence/react-native-header';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const CustomHeaderComponent: React.FC<ScrollHeaderProps> = ({showNavBar}) => {
  const navigation = useNavigation();
  const onPressBackButton = () => navigation.goBack();
  return (
    <Header
      showNavBar={showNavBar}
      headerCenterStyle={styles.headerCenterStyle}
      headerLeftStyle={styles.headerLeftStyle}
      headerLeft={
        <Icon
          onPress={onPressBackButton}
          color="black"
          size={30}
          name="arrow-back"
        />
      }
      headerCenter={<Text style={styles.headerTitleStyle}>Settings</Text>}
    />
  );
};

export default CustomHeaderComponent;
