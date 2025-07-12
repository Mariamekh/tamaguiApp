import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TamaguiProvider, Theme, YStack} from 'tamagui';
import config from './tamagui.config';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {HomeScreen} from './src/screens/HomeScreen';
import {useColorScheme} from './src/hooks/useColorScheme';

export function App() {
  const {theme, setTheme} = useColorScheme();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <TamaguiProvider config={config}>
          <Theme name={theme}>
            <YStack flex={1} backgroundColor="$background">
              <HomeScreen theme={theme} setTheme={setTheme} />
            </YStack>
          </Theme>
        </TamaguiProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
