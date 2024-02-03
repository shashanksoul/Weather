import React from 'react';
import {SectionListRenderItem} from 'react-native';

import Link from '@components/common/Link';

const RenderAboutItem: SectionListRenderItem<string> = ({item}) => (
  <Link
    title={item}
    iconName={item === 'TERMS OF SERVICE' ? 'arrow-forward' : 'open-in-new'}
    onPress={() => {}}
  />
);

export default RenderAboutItem;
