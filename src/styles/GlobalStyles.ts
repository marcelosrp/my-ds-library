import { createGlobalStyle } from 'styled-components';

export const breakpoint = (width: number, type = 'max-width') =>
  `@media screen and (${type}:${width}px)`;

export const GlobalStyle = createGlobalStyle`  
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300;400;500;600;700&display=swap');

  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
`;
