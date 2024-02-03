import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface RadioButtonProps {
  label: string;
  onSelect: () => void;
  selected: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  selected,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={style.radioButton}
      activeOpacity={0.6}>
      <Text style={style.titleStyle}>{label}</Text>
      {selected && (
        <View style={style.selectedOuterCircle}>
          <View style={style.selectedInnerCircle} />
        </View>
      )}
      {!selected && <View style={style.outerCircle} />}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 13,
  },
  titleStyle: {
    fontSize: 18,
    color: 'black',
  },
  selectedOuterCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderBlockColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  outerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderBlockColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedInnerCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'white',
  },
});
export default RadioButton;
