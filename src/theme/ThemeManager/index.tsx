import React, { createContext, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import darkTheme from './modes/darkMode';
import ligthTheme from './modes/ligthMode';
import typography from './typography';
type State = 'Dark' | 'Light';

export const ModeChangeContext = createContext<{mode: State, toggleMode: Function}>({mode: 'Light', toggleMode: Function});

const ThemeManager: React.FC = ({children}) => {
  const [mode, setMode] = React.useState<State>('Light');

  const toggleMode: Function = useCallback(
    () => {
      setMode(mode === 'Light'? 'Dark' : 'Light');
    },
    [mode],
  )

  return(
    <ModeChangeContext.Provider value={{mode, toggleMode}}>
      <ThemeProvider theme={{
        colors: mode === 'Light'? ligthTheme : darkTheme,
        fontFamily: '\'Fira Sans Condensed\', sans-serif',
        typography
      }}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ModeChangeContext.Provider>
  );
}

export default ThemeManager;
