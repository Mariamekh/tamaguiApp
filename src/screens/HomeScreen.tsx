import {useState} from 'react';
import {Header} from '../components/Header/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {YStack} from 'tamagui';
import {HeroSlider} from '../components/HeroSlider/HeroSlider';

type Props = {
  setTheme: (t: 'light' | 'dark') => void;
  theme: 'light' | 'dark';
};

export const HomeScreen = ({setTheme, theme}: Props) => {
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
        <Header
          userName="John"
          balance={balance}
          isLoading={loading}
          onRefresh={refreshBalance}
          theme={theme}
          setTheme={setTheme}
        />
        <HeroSlider />
      </YStack>
    </SafeAreaView>
  );
};
