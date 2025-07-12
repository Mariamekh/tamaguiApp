import {HeaderLayout} from './HeaderLayout';
import {useAnimatedBalance} from '../../hooks/useAnimatedBalance';

export interface HeaderProps {
  userName: string;
  balance: number;
  isLoading: boolean;
  onRefresh: () => void;
  setTheme: (t: 'light' | 'dark') => void;
  theme: 'light' | 'dark';
  hasError?: boolean;
}

export function Header({
  userName,
  balance,
  isLoading,
  onRefresh,
  setTheme,
  theme,
}: HeaderProps) {
  const displayedBalance = useAnimatedBalance(balance);

  return (
    <HeaderLayout
      userName={userName}
      displayedBalance={displayedBalance}
      isLoading={isLoading}
      onRefresh={onRefresh}
      setTheme={setTheme}
      theme={theme}
    />
  );
}
