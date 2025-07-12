import React, {useState} from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {XStack, View, Text, YStack} from 'tamagui';

import {ConfettiOverlay} from './ConfettiOverlay';
import {slides} from '../../data/sliderData';
import {useAutoplayPause} from '../../hooks/useAutoplayPause';
import {SliderItem} from './SliderItem';

const {width} = Dimensions.get('window');

export const HeroSlider = () => {
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>(
    () => slides.reduce((acc, s) => ({...acc, [s.id]: true}), {}),
  );
  const [activeSlideId, setActiveSlideId] = useState(slides[0]?.id);
  const [showConfetti, setShowConfetti] = useState(false);
  const {isPaused, pause} = useAutoplayPause();

  const handleCta = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <YStack backgroundColor={slides.length ? '$background' : '$white'}>
      <Carousel
        loop
        autoPlay={!isPaused}
        autoPlayInterval={4000}
        width={width}
        height={220}
        data={slides}
        scrollAnimationDuration={1000}
        onScrollEnd={pause}
        onSnapToItem={index => setActiveSlideId(slides[index]?.id)}
        renderItem={({item}) => (
          <SliderItem
            item={item}
            loading={imageLoading[item.id]}
            onLoad={() =>
              setImageLoading(prev => ({...prev, [item.id]: false}))
            }
            onPress={handleCta}
            onTouchStart={pause}
          />
        )}
      />
      <XStack justifyContent="center" mt="$2">
        {slides.map(slide => (
          <View
            testID={`slide-indicator-${slide.id}`}
            key={slide.id}
            width={8}
            height={8}
            mx="$1"
            borderRadius={4}
            bg={activeSlideId === slide.id ? '$purple' : '$darkPurple'}
          />
        ))}
      </XStack>
      <ConfettiOverlay visible={showConfetti} />
    </YStack>
  );
};
