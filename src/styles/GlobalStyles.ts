export const breakpoint = (width: number, type = 'max-width') =>
  `@media screen and (${type}:${width}px)`;
