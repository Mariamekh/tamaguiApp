import {Text, XStack, YStack, Spinner, Button, Avatar} from 'tamagui';
import {Bell, Menu, RefreshCcw} from '@tamagui/lucide-icons';
import {ThemeToggle} from '../ThemeToggle/ThemeToggle';
interface Props {
  userName: string;
  displayedBalance: number;
  isLoading: boolean;
  onRefresh: () => void;
  setTheme: (t: 'light' | 'dark') => void;
  theme: 'light' | 'dark';
}

export const HeaderLayout = ({
  userName,
  displayedBalance,
  isLoading,
  onRefresh,
  setTheme,
  theme,
}: Props) => {
  return (
    <YStack bg="$background" px="$4" py="$3" gap="$4">
      <XStack alignItems="center" justifyContent="space-between">
        <Text fontSize="$7" fontWeight="800" color="$color">
          LOGO
          <Text color="$purple" fontWeight="600">
            BET
          </Text>
        </Text>

        <XStack alignItems="center" gap="$3">
          <Avatar circular size="$3" borderWidth={2} borderColor="#FFD700">
            <Avatar.Image src="https://i.pravatar.cc/100" />
          </Avatar>
          <Button icon={Bell} circular size="$4" />
          <Button circular size="$4" icon={Menu} />
          <ThemeToggle setTheme={setTheme} theme={theme} />
        </XStack>
      </XStack>

      <XStack
        alignItems="center"
        justifyContent="center"
        bg="$darkPurple"
        borderRadius="$5"
        padding="$2"
        elevation="$2">
        <XStack alignItems="center" flexDirection="column">
          <Text fontFamily="$silkscreen" fontSize="$6" color="$white">
            Welcome Back, {userName}!
          </Text>
          <XStack alignItems="center">
            <Text fontSize="$5" fontWeight="600" color="$white">
              Balance: ${displayedBalance.toFixed(2)}
            </Text>
            <Button
              testID="refresh-button"
              circular
              icon={
                isLoading
                  ? () => (
                      <Spinner testID="spinner" size="small" color="$white" />
                    )
                  : RefreshCcw
              }
              onPress={onRefresh}
              bg="$darkPurple"
              borderColor="$darkPurple"
              borderWidth={1}
              color="$white"
            />
          </XStack>
        </XStack>
      </XStack>

      <YStack mt="$2" mb="$2">
        <Text fontSize="$5" color="$color">
          What's your favorite game to play?
        </Text>
      </YStack>
    </YStack>
  );
};
