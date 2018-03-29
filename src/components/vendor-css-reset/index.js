import { injectGlobal } from 'styled-components';

export default function () {
  injectGlobal`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      border: 0;
      font: inherit;
      font-size: 100%;
      margin: 0;
      padding: 0;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote::before, blockquote::after,
    q::before, q::after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
        height: 100%;
        min-height: 100%;
        overflow-y: scroll;
        -webkit-text-size-adjust: 100%;
    }

    body {
        font-size: 1.6rem;
        -moz-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        line-height: 1.4;
        text-rendering: optimizeLegibility;
    }

    *,
    *::after,
    *::before {
        box-sizing: inherit;
    }

    * {
        ::selection {
            background: $primary-font-color;
            color: $white;
            text-shadow: none;
        }
    }

    strong {
        font-weight: bold;
    }

    em {
        font-style: italic;
    }

    img {
        display: block;
        max-width: 100%;
    }

    a {
        text-decoration: none;
    }

    figure,
    blockquote {
        margin: 0;
    }

    blockquote {
        .quote {
            quotes: '“' '”' '‘' '’';

            &::before {
                content: open-quote;
            }

            &::after {
                content: close-quote;
            }
        }
    }

    [type='color'],
    [type='date'],
    [type='datetime'],
    [type='datetime-local'],
    [type='email'],
    [type='month'],
    [type='number'],
    [type='password'],
    [type='search'],
    [type='tel'],
    [type='text'],
    [type='time'],
    [type='url'],
    [type='week'],
    textarea,
    select {
        -moz-appearance: none;
        -webkit-appearance: none;
        border: 1px solid grey;
        border-radius: 0;
        box-shadow: none;
        max-width: 100%;

        &:focus {
            box-shadow: none;
            outline: 0;
        }
    }

    [type='button'],
    [type='reset'],
    [type='submit'],
    button {
        -moz-appearance: none;
        -webkit-appearance: none;
        border: 0;
        border-radius: 0;
        box-shadow: 0;
    }

    textarea {
        resize: none;
        width: 100%;
    }

    input:disabled,
    input[readonly],
    select:disabled,
    textarea:disabled,
    textarea[readonly] {
        cursor: default;
    }

    [type='checkbox'],
    [type='file'],
    [type='radio'] {
        margin: 0 0 1rem;
    }

    [type='checkbox'],
    [type='radio'] {
        display: inline-block;
        margin-right: 5px;
        vertical-align: baseline;
    }

    [type='checkbox'] + label,
    [type='radio'] + label {
        display: inline-block;
        margin: 0;
        vertical-align: middle;
    }

    [type='file'] {
        width: 100%;
    }

    fieldset {
        border: 0;
        margin: 0;
        padding: 0;
    }

    legend {
        margin-bottom: 0;
        max-width: 100%;
    }
  `;
}
