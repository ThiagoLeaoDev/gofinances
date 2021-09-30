//arquivo para sobreescrever tipos
import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme //typeof copia exatamente a tipagem de um objeto

  export interface DefaultTheme extends ThemeType {}
}