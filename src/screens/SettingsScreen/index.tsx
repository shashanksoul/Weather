import React, {useCallback, useState} from 'react';
import {SectionListRenderItem, Text, View} from 'react-native';

import {
  ScrollLargeHeaderProps,
  SectionListWithHeaders,
} from '@codeherence/react-native-header';
import RenderAboutItem from '@components/AboutItem';
import RadioButton from '@components/common/RadioButton';
import RadioRow from '@components/common/RadioRow';
import RowSeparator from '@components/common/RowSeparator';
import CustomHeaderComponent from '@components/CustomHeader';
import LargeHeaderComponent from '@components/LargeHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {style} from './styles';

const renderRadioItem: SectionListRenderItem<string> = ({
  item,
  isSelected,
  onPress,
}) => {
  return <RadioButton label={item} selected={isSelected} onSelect={onPress} />;
};

const DATA = [
  {
    title: 'UNITS',
    data: ['CELSIUS', 'FAHRENHEIT'],
    render: renderRadioItem,
  },
  {
    title: 'WIND SPEED',
    data: ['KM/H', 'MPH', 'M/S'],
    render: renderRadioItem,
  },
  {
    title: 'ABOUT',
    data: ['TERMS OF SERVICE', 'PRIVACY POLICY'],
    render: RenderAboutItem,
  },
];

const SettingsScreen = () => {
  const {bottom} = useSafeAreaInsets();
  const [selectedRadio, setSelectedRadio] = useState({
    UNITS: 0,
    'WIND SPEED': 0,
  });

  const renderLargeHeader = useCallback(
    (largeHeaderProps: ScrollLargeHeaderProps) => (
      <LargeHeaderComponent
        scrollY={largeHeaderProps.scrollY}
        showNavBar={largeHeaderProps.showNavBar}
        title="Settings"
      />
    ),
    [],
  );

  const handleRadioPress = (sectionIndex, itemIndex) => {
    const newSelectedRadio = {...selectedRadio};
    newSelectedRadio[sectionIndex] = itemIndex;
    setSelectedRadio(newSelectedRadio);
  };

  const renderItem: SectionListRenderItem<string> = ({
    item,
    index,
    section,
  }) => {
    const isSelected = selectedRadio[section.title] === index;
    return (
      <>
        {section.render({
          item,
          index,
          isSelected,
          onPress: () => {
            handleRadioPress(section.title, index);
          },
        })}
      </>
    );
  };

  return (
    <SectionListWithHeaders
      HeaderComponent={CustomHeaderComponent}
      LargeHeaderComponent={renderLargeHeader}
      contentContainerStyle={{paddingBottom: bottom}}
      sections={DATA}
      style={style.sectionList}
      renderItem={renderItem}
      renderSectionFooter={({section: {title}}) =>
        title !== DATA[DATA.length - 1].title ? <RowSeparator /> : null
      }
      renderSectionHeader={({section: {title}}) => (
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'SpaceMono-Regular',
            paddingTop: title === DATA[0].title ? 20 : 0,
          }}>
          {title}
        </Text>
      )}
      keyExtractor={(_, i) => `text-row-${i}`}
    />
  );
};

export default SettingsScreen;
