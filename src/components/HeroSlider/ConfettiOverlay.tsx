import React from 'react';
import Confetti from 'react-native-simple-confetti';

type ConfettiOverlayProps = {
  visible: boolean;
};

export const ConfettiOverlay = ({visible}: ConfettiOverlayProps) => {
  if (!visible) return null;
  return <Confetti testID="confetti" count={80} speed={3000} fromCenter />;
};
