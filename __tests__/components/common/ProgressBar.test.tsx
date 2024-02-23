import React from 'react';

import ProgressBar from '@components/common/ProgressBar';
import {render} from '@testing-library/react-native';
import {act} from 'react-test-renderer';

jest.useFakeTimers();

describe('progressbar component', () => {
  test('render', () => {
    const progressBar = render(<ProgressBar />);
    expect(progressBar.toJSON()).toMatchSnapshot();
  });

  test('setInterval working properly', () => {
    const {getAllByTestId} = render(<ProgressBar />);
    const dots = getAllByTestId('dot');
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(dots[0].props.style[1].opacity).toBe(0.2);
    expect(dots[1].props.style[1].opacity).toBe(1);
    expect(dots[2].props.style[1].opacity).toBe(0.2);
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(dots[0].props.style[1].opacity).toBe(0.2);
    expect(dots[1].props.style[1].opacity).toBe(0.4);
    expect(dots[2].props.style[1].opacity).toBe(1);
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(dots[0].props.style[1].opacity).toBe(1);
    expect(dots[1].props.style[1].opacity).toBe(0.4);
    expect(dots[2].props.style[1].opacity).toBe(0.2);
  });
});
