import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type TypeTheme = 'light' | 'dark';

interface InterfaceThemeContext {
	theme: TypeTheme;
	setTheme: Dispatch<SetStateAction<TypeTheme>>;
};

const ThemeContextDefaultValue: InterfaceThemeContext = {
	theme: 'light',
	setTheme: () => {},
}

export const ThemeContext = createContext(ThemeContextDefaultValue);

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
