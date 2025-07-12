import {useState, useEffect} from 'react';
import {Appearance} from 'react-native';

export function useColorScheme(defaultScheme: 'light' | 'dark' = 'dark') {
  const systemColorScheme = Appearance.getColorScheme() as 'light' | 'dark';
  const [theme, setTheme] = useState<'light' | 'dark'>(
    systemColorScheme || defaultScheme,
  );

  useEffect(() => {
    const listener = Appearance.addChangeListener(({colorScheme}) => {
      setTheme((colorScheme ?? defaultScheme) as 'light' | 'dark');
    });
    return () => listener.remove();
  }, []);

  return {theme, setTheme};
}
