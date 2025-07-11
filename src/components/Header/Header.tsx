import {useEffect, useRef, useState} from 'react';
import {Animated, Easing} from 'react-native';
import {Text, XStack, YStack, Spinner, Button, Avatar, Image} from 'tamagui';
import {Bell, Menu, RefreshCcw} from '@tamagui/lucide-icons';

type Props = {
  userName: string;
  balance: number;
  isLoading: boolean;
  onRefresh: () => void;
  hasError?: boolean; // 👈 Add this to reflect error state
};

export function Header({
  userName,
  balance,
  isLoading,
  onRefresh,
  hasError = false,
}: Props) {
  const animatedBalance = useRef(new Animated.Value(balance)).current;
  const [displayedBalance, setDisplayedBalance] = useState(balance);

  useEffect(() => {
    Animated.timing(animatedBalance, {
      toValue: balance,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [balance]);

  useEffect(() => {
    const id = animatedBalance.addListener(({value}) => {
      setDisplayedBalance(Math.round(value));
    });
    return () => animatedBalance.removeListener(id);
  }, []);

  return (
    <YStack bg="$background" px="$4" py="$3" gap="$4">
      <XStack alignItems="center" justifyContent="space-between">
        <XStack alignItems="center" gap="$2">
          <Button circular size="$5" icon={Menu} chromeless />

          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Font_Awesome_5_regular_club.svg/1200px-Font_Awesome_5_regular_club.svg.png',
            }}
            width={24}
            height={24}
          />
          <Text fontSize={24} fontWeight="800" color="$color">
            LOGO<Text color="#FF30E3">BET</Text>
          </Text>
        </XStack>

        <XStack alignItems="center" gap="$3">
          <Avatar circular size="$3" borderWidth={2} borderColor="#FFD700">
            <Avatar.Image src="https://i.pravatar.cc/100" />
          </Avatar>
          <Button icon={Bell} circular size="$3" chromeless />
        </XStack>
      </XStack>

      <XStack alignItems="center" justifyContent="space-between">
        <Text
          fontSize={20}
          fontWeight="700"
          color={hasError ? 'red' : '$color'}>
          Balance: ${displayedBalance.toFixed(2)}
        </Text>

        <Button
          circular
          size="$3"
          icon={isLoading ? () => <Spinner size="small" /> : RefreshCcw}
          onPress={onRefresh}
        />
      </XStack>

      <YStack mt="$2">
        <Text fontWeight="700" fontSize="$8" color="$color">
          Welcome Back, {userName}!
        </Text>
        <Text fontSize="$3" color="$colorPress">
          What's your favorite game to play?
        </Text>
      </YStack>
    </YStack>
  );
}
