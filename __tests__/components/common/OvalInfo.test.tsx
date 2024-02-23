import React from 'react';

import OvalInfo from '@components/common/OvalInfo';
import {render} from '@testing-library/react-native';

const mockHeading = 'This is Heading';
const mockSubHeading = 'This is subHeading';
describe('OvalInfo Component', () => {
  test('render', () => {
    const ovalInfo = render(
      <OvalInfo heading={mockHeading} subHeading={mockSubHeading} />,
    );
    const heading = ovalInfo.getByTestId('heading-text');
    const subHeading = ovalInfo.getByTestId('subHeading-text');
    expect(heading).toBeTruthy();
    expect(subHeading).toBeTruthy();
    expect(ovalInfo.toJSON()).toMatchSnapshot();
  });
  test('when isDanger is true', () => {
    const ovalInfo = render(
      <OvalInfo isDanger heading={mockHeading} subHeading={mockSubHeading} />,
    );
    const oval = ovalInfo.getByTestId('oval-view');
    const heading = ovalInfo.getByTestId('heading-text');
    expect(oval.props.style[1].backgroundColor).toEqual('red');
    expect(heading.props.style[1].color).toEqual('white');
  });
});
