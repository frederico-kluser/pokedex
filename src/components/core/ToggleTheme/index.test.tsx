import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { InterfaceThemeProvider, ThemeContext, TypeTheme } from "../../../context/theme";
import ToggleTheme from ".";
import { useState } from "react";

describe('ToggleTheme component', () => {
  const ThemeContextProvider = ({ children }: InterfaceThemeProvider) => {
    const [theme, setTheme] = useState<TypeTheme>('light');

    return (
      <ThemeContext.Provider value={{
        theme,
        setTheme,
      }}>
        { children }
      </ThemeContext.Provider>
    );
  };

  let container: HTMLElement;
  let components: HTMLCollectionOf<Element>;

  beforeEach(() => {
    container = render(
      <ThemeContextProvider>
        <ToggleTheme />
      </ThemeContextProvider>
    ).container;
    components = container.getElementsByClassName('button');
  })

  it('render ToggleTheme component', () => {
    // ASSERT
    expect(components.length).toBe(1);
  });

  it('check ToggleTheme dark mode', () => {
    // ASSERT
    expect(components[0].innerHTML).toBe('dark mode');
  });

  it('check ToggleTheme light mode', async () => {
    // ARRANGE
    const user = userEvent.setup();

    // ACT
    await user.click(components[0]);

    // ASSERT
    expect(components[0].innerHTML).toBe('light mode');
  });
});
