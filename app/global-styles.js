import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .example-enter {
  }

  .example-enter.example-enter-active {
    -webkit-animation-duration: 300ms;
    animation-duration: 300ms;
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }

  .example-leave {
    -webkit-animation-duration: 300ms;
    animation-duration: 300ms;
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;

  }

  .example-leave.example-leave-active {
  }

  .example-appear {
  }

  .example-appear.example-appear-active {
    display:none;
  }
`;
