import React from 'react';

import CircleInfo from '@components/common/CircleInfo';
import {render} from '@testing-library/react-native';

describe('CircleInfo Component', () => {
  test('render- ifFeelsLike true', () => {
    const circleInfo = render(<CircleInfo temperature="28" isFeelsLike />);
    const text = circleInfo.getByTestId('feel-like-text');
    expect(text).toBeTruthy();
    expect(circleInfo.toJSON()).toMatchSnapshot();
  });
  test('render- ifFeelsLike false', () => {
    const circleInfo = render(
      <CircleInfo temperature="28" high="29" low="18" />,
    );
    const tempText = circleInfo.getByTestId('temperature-text');
    const highLowText = circleInfo.getByTestId('hi-low-text');
    expect(tempText.children).toEqual(['28º']);
    expect(highLowText.children).toEqual(['H: 29º L: 18º']);
  });
});
