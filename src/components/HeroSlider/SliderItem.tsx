import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {YStack, Text, View, Spinner, Image, Button} from 'tamagui';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

type SlideItemProps = {
  item: {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    cta: string;
  };
  loading: boolean;
  onLoad: () => void;
  onPress: () => void;
  onTouchStart: () => void;
};

export const SliderItem = ({
  item,
  loading,
  onLoad,
  onPress,
  onTouchStart,
}: SlideItemProps) => {
  const [hasError, setHasError] = useState(false);

  return (
    <YStack
      width="90%"
      marginHorizontal="auto"
      height={220}
      overflow="hidden"
      borderRadius="$6"
      position="relative"
      onTouchStart={onTouchStart}>
      {!hasError ? (
        <Image
          source={{uri: item.image}}
          onLoad={onLoad}
          testID="image"
          accessibilityRole="image"
          onError={() => {
            setHasError(true);
            onLoad();
          }}
          style={StyleSheet.absoluteFillObject}
        />
      ) : (
        <View
          p="absolute"
          {...StyleSheet.absoluteFillObject}
          backgroundColor="$colorPress"
          justifyContent="center"
          alignItems="center">
          <Text color="white" fontWeight="600" fontSize="$6">
            Failed to load image
          </Text>
        </View>
      )}

      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 16,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}>
        <Text fontSize="$8" fontWeight="800" color="white">
          {item.title}
        </Text>
        <Text fontSize="$6" color="white" my="$2">
          {item.subtitle}
        </Text>
      </Animated.View>

      {loading && (
        <View
          position="absolute"
          justifyContent="center"
          alignItems="center"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="rgba(0,0,0,0.3)">
          <Spinner testID="loading-spinner" size="large" color="white" />
        </View>
      )}

      <Button
        borderRadius="$10"
        backgroundColor="$purple"
        size="$4"
        color="white"
        fontSize="$4"
        fontWeight="600"
        onPress={onPress}
        position="absolute"
        bottom="$4"
        alignSelf="center"
        zIndex={2}>
        {item.cta}
      </Button>
    </YStack>
  );
};
