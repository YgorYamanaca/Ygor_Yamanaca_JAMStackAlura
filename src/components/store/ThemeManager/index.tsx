import React, { createContext, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import darkTheme from './modes/darkMode';
import ligthTheme from './modes/ligthMode';

type State = 'Dark' | 'Light';

export const ModeChangeContext = createContext<Function>(Function);

const ThemeManager: React.FC = ({children}) => {
  const [mode, setMode] = React.useState<State>('Light');

  const toggleMode: Function = useCallback(
    () => {
      setMode(mode === 'Light'? 'Dark' : 'Light');
    },
    [mode],
  )

  return(
    <ModeChangeContext.Provider value={toggleMode}>
      <ThemeProvider theme={{
        colors: mode === 'Light'? darkTheme : ligthTheme,
        fontFamily: '\'Rubik\', sans-serif'
      }}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ModeChangeContext.Provider>
  );
}

export default ThemeManager;
