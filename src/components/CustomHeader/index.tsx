import React, {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';

import {
  FadingView,
  Header,
  ScrollHeaderProps,
  SurfaceComponentProps,
} from '@codeherence/react-native-header';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const SURFACE_BG_COLOR = '#D7D9D8';

//To show custom color when user scrolls screen
const HeaderSurface: React.FC<SurfaceComponentProps> = ({showNavBar}) => (
  <FadingView
    opacity={showNavBar}
    style={[StyleSheet.absoluteFillObject, {backgroundColor: SURFACE_BG_COLOR}]}
  />
);

const CustomHeaderComponent: React.FC<ScrollHeaderProps> = ({showNavBar}) => {
  const navigation = useNavigation();
  const onPressBackButton = () => navigation.goBack();
  return (
    <Header
      showNavBar={showNavBar}
      headerCenterStyle={styles.headerCenterStyle}
      headerLeftStyle={styles.headerLeftStyle}
      noBottomBorder
      SurfaceComponent={HeaderSurface}
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
