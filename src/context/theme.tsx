import { createContext, ReactNode, useState } from 'react';

type TypeTheme = 'light' | 'dark';

export const ThemeContext = createContext({});

interface InterfaceThemeProvider {
	children: ReactNode;
}

const ThemeProvider = ({ children }: InterfaceThemeProvider) => {
	const [theme, setTheme] = useState<TypeTheme>('light');

	return <ThemeContext.Provider value={{
		theme,
		setTheme,
	}}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
