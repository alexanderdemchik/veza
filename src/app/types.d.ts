interface Palette {
  background: {
    default: string,
    paper: string
  },
  primary: {
    main: string
  },
  text: {
    primary: string
  },
  divider: string
}

interface Theme {
  palette: Palette,
  shadows: any,
  typography: any
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}