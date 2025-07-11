import {Text, XStack, Spinner, Button, Image} from 'tamagui';
import {RefreshCcw} from '@tamagui/lucide-icons';

type Props = {
  balance: number;
  isLoading: boolean;
  onRefresh: () => void;
};

export function BalanceBadge({balance, isLoading, onRefresh}: Props) {
  return (
    <XStack
      bg="#771FE0"
      px="$3"
      py="$2"
      borderRadius={20}
      alignItems="center"
      elevation="$4">
      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Font_Awesome_5_solid_coins.svg/1024px-Font_Awesome_5_solid_coins.svg.png',
        }}
        width={20}
        height={20}
        resizeMode="contain"
      />
      <Text fontWeight="700" fontSize="$5" color="white">
        {balance.toLocaleString('en-US', {minimumFractionDigits: 2})}
      </Text>
      <Button
        icon={
          isLoading ? () => <Spinner size="small" color="white" /> : RefreshCcw
        }
        chromeless
        size="$2"
        circular
        onPress={onRefresh}
      />
    </XStack>
  );
}
