import {useState} from 'react';
import {Header} from '../components/Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, YStack, View} from 'tamagui';

type Props = {
  setTheme: (t: 'light' | 'dark') => void;
  theme: 'light' | 'dark';
};

export default function HomeScreen({setTheme, theme}: Props) {
  const [balance, setBalance] = useState(150.0);
  const [loading, setLoading] = useState(false);

  const refreshBalance = async () => {
    setLoading(true);
    setTimeout(() => {
      setBalance(Math.random() * 1000);
      setLoading(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <YStack flex={1} bg="$background">
        <Button
          onPress={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>

        <Header
          userName="John"
          balance={balance}
          isLoading={loading}
          onRefresh={refreshBalance}
        />
      </YStack>
    </SafeAreaView>
  );
}
