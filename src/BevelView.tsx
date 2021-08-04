import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import React, { useEffect } from 'react';

import { BevelViewProps } from './BevelView.props';
import {StyleSheet} from 'react-native'

export function BevelView(props: BevelViewProps) {
  const {
    children,
    style: BevelStyle,
    bevelDeg = 30,
    duration = 16000,
    delay = 0,
    perspective = 200,
  } = props;
  const defaultZIndex = { zIndex: 1 };
  const style = StyleSheet.flatten([defaultZIndex, BevelStyle])
  const r = useSharedValue(0);
  useEffect(() => {
    setTimeout(() => {
      r.value = withRepeat(
        withTiming(2 * Math.PI, { duration: duration, easing: Easing.linear }),
        0,
        false,
      );
    }, delay);
  }, []);
  const rstyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: perspective },
        { rotateX: `${Math.sin(r.value) * bevelDeg}deg` },
        { rotateY: `${Math.cos(r.value) * bevelDeg}deg` },
      ],
    };
  }, []);

  return <Animated.View style={[style, rstyle]}>{children}</Animated.View>;
}
