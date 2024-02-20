import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface RowSeparatorProps {
  style?: ViewStyle;
}

const RowSeparator: React.FC<RowSeparatorProps> = ({style}) => {
  return <View style={[defaultStyle.separatorStyle, style]} />;
};

const defaultStyle = StyleSheet.create({
  separatorStyle: {
    flex: 1,
    height: 1,
    marginVertical: 20,
    backgroundColor: 'grey',
  },
});

export default RowSeparator;
