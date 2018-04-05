import { injectGlobal } from 'styled-components';
import theme from '../themes/default';
import Reset from './reset';

export default function () {
  return injectGlobal`
    ${Reset}

    body {
      background: ${theme.colors.greyDarkest};
      font-family: ${theme.fonts.primary};
      font-weight: 400;
      font-size: 1.4rem;
      padding: 2rem;
    }
  `;
}
