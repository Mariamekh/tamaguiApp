import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';
import {Text} from '@tamagui/core';

const AnimatedText = Animated.createAnimatedComponent(Text);

type BalanceProps = {
  amount: number;
  isLoading?: boolean;
};

export const Balance = ({amount}: BalanceProps) => {
  const balance = useSharedValue(amount);

  useEffect(() => {
    balance.value = withTiming(amount, {duration: 600});
  }, [amount]);

  const animatedProps = useAnimatedProps(() => ({
    text: `$${balance.value.toFixed(2)}`,
  }));

  return (
    <AnimatedText
      animatedProps={animatedProps as any}
      fontSize="$5"
      fontWeight="bold"
      color="$color"
    />
  );
};
