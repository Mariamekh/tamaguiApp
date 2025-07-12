import {useEffect, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimatedBalance = (balance: number): number => {
  const animatedValue = useRef(new Animated.Value(balance)).current;
  const [displayedBalance, setDisplayedBalance] = useState(balance);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: balance,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [balance]);

  useEffect(() => {
    const id = animatedValue.addListener(({value}) => {
      setDisplayedBalance(Math.round(value));
    });

    return () => animatedValue.removeListener(id);
  }, []);

  return displayedBalance;
};
