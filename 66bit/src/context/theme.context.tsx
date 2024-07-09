import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { ThemeContextProviderProps } from './ThemeContextProvider.props';

type ThemeContextType = {
  theme: 'default' | 'dark';
  setTheme: Dispatch<SetStateAction<'default' | 'dark'>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'default',
  setTheme: () => {},
});

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<'default' | 'dark'>('default');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
