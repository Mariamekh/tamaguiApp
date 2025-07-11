import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TamaguiProvider, Theme} from 'tamagui';
import config from './tamagui.config';
import HomeScreen from './src/screens/HomeScreen';
import {useState} from 'react';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config}>
        <Theme name={theme}>
          <HomeScreen setTheme={setTheme} theme={theme} />
        </Theme>
      </TamaguiProvider>
    </SafeAreaProvider>
  );
}

export default App;
