import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

interface LinkProps {
  title: string;
  iconName: string;
  iconSize?: number;
  onPress: () => void;
}

const Link: React.FC<LinkProps> = ({
  title,
  iconName,
  iconSize = 25,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPressIn={onPress}
      style={style.container}>
      <Text style={style.titleStyle}>{title}</Text>
      <Icon size={iconSize} name={iconName} />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 13,
  },
  titleStyle: {
    fontSize: 18,
    color: 'black',
  },
});

export default Link;
