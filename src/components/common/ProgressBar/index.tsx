import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';

import style from './styles';

const ProgressBar = () => {
  const dots = [1, 2, 3];
  const [activeDot, setActiveDot] = React.useState(1);
  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    interval.current = setInterval(() => {
      setActiveDot(preActiveDot => (preActiveDot > 2 ? 1 : preActiveDot + 1));
    }, 300);

    return () => clearInterval(interval.current);
  }, []);

  return (
    <View style={style.container}>
      <View style={style.circleContainer}>
        {dots.map(value => (
          <Dot
            key={value.toString()}
            defaultOpacity={value === 2 ? 0.4 : 0.2}
            isActive={value === activeDot}
          />
        ))}
      </View>
    </View>
  );
};

export default ProgressBar;

type DotProps = {
  isActive: boolean;
  defaultOpacity?: number;
};

const Dot: React.FC<DotProps> = ({isActive, defaultOpacity}) => {
  return (
    <View
      testID="dot"
      style={[style.circle, {opacity: isActive ? 1 : defaultOpacity}]}
    />
  );
};
