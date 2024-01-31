import React, {useCallback} from 'react';
import {SectionListRenderItem, Text, View} from 'react-native';

import {
  ScrollLargeHeaderProps,
  SectionListWithHeaders,
} from '@codeherence/react-native-header';
import RowSeparator from '@components/common/RowSeparator';
import CustomHeaderComponent from '@components/CustomHeader';
import LargeHeaderComponent from '@components/LargeHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {style} from './styles';

const DATA = [
  {
    title: 'UNITS',
    data: ['Pizza', 'Burger', 'Risotto', 'Pasta', 'Lasagna'],
  },
  {
    title: 'WIND SPEED',
    data: [
      'French Fries',
      'Onion Rings',
      'Fried Shrimps',
      'Mozzarella Sticks',
      'Garlic Bread',
    ],
  },
  {
    title: 'ABOUT',
    data: [
      'Water',
      'Coke',
      'Beer',
      'Wine',
      'Mojito',
      'Cuba Libre',
      'Pina Colada',
      'Margarita',
    ],
  },
];

const SettingsScreen = () => {
  const {bottom} = useSafeAreaInsets();

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

  const renderItem: SectionListRenderItem<string> = useCallback(({item}) => {
    return (
      <View style={{width: '100%'}}>
        <Text style={{fontSize: 30}}>
          {item}. Scroll to see header animation
        </Text>
      </View>
    );
  }, []);
  return (
    <SectionListWithHeaders
      HeaderComponent={CustomHeaderComponent}
      LargeHeaderComponent={renderLargeHeader}
      contentContainerStyle={{paddingBottom: bottom}}
      sections={DATA}
      style={style.sectionList}
      renderItem={renderItem}
      renderSectionFooter={({section}) =>
        section.title !== DATA[DATA.length - 1].title ? <RowSeparator /> : null
      }
      renderSectionHeader={({section: {title}}) => (
        <Text style={{fontSize: 20}}>{title}</Text>
      )}
      keyExtractor={(_, i) => `text-row-${i}`}
    />
  );
};

export default SettingsScreen;
