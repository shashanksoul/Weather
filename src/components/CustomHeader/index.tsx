import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {
  Header,
  ScrollHeaderProps,
  SurfaceComponentProps,
} from '@codeherence/react-native-header';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const SURFACE_BG_COLOR = 'white';

//To show custom color when user scrolls screen
const HeaderSurface: React.FC<SurfaceComponentProps> = ({showNavBar}) => {
  const bgColor = useDerivedValue(() => {
    return interpolateColor(
      showNavBar.value,
      [0, 1],
      ['#D7D9D8', SURFACE_BG_COLOR],
    );
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: bgColor.value,
    };
  });
  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, animatedStyle]} />
  );
};

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
