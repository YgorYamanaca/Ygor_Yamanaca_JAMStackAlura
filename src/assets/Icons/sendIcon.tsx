import React from 'react';
import { DefaultTheme, withTheme } from 'styled-components';

type IconType = {
  theme?: DefaultTheme;
}

const SendIcon: React.FC<IconType> = ({
  theme,
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={`${theme?.colors.background.main.color}`} viewBox="0 0 24 24">
    <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
  </svg>
);

export default withTheme(SendIcon);
