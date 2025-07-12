import {Moon, Sun} from '@tamagui/lucide-icons';
import {IconButton} from '../IconButton/IconButton';

type Props = {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
};

export const ThemeToggle = ({theme, setTheme}: Props) => {
  const isDark = theme === 'dark';

  return (
    <IconButton
      testID="theme-toggle"
      icon={isDark ? Sun : Moon}
      onPress={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
      color="$purple"
    />
  );
};
