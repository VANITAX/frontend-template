// App.jsx
import React from "react";
import PropTypes from "prop-types";

import styled, {
  createGlobalStyle,
  StyleSheetManager
} from "styled-components";

import styledNormalize from "styled-normalize";

import media from "../style/media.js";

const GlobalStyle = createGlobalStyle`
  ${styledNormalize};
  *, ::after, ::before { box-sizing: border-box; }
  body {
    background-color: #191919;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
      Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    -webkit-tap-highlight-color: transparent;
    overscroll-behavior-y: contain;
  }
  button {
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
  input::placeholder,
  input::-webkit-input-placeholder,
  input::-moz-placeholder {
    line-height: normal !important;
    vertical-align: middle;
  }
  a { color: inherit; text-decoration: none; }
  a > * { opacity: inherit; }
  a:hover {
    opacity: .7;

    ${media.mobile`
      opacity: 1;
    `};
  }
  iframe {
    border-width: 0px;
  }

  ${media.tablet`
    html { touch-action: manipulation; }
  `};
`;

const App = () => (
  <StyledApp>
    <GlobalStyle />
  </StyledApp>
);

App.propTypes = {};
const StyledApp = styled.div``;

const StyledBody = ({ sheet, request }) => {
  if (sheet) {
    return (
      <StyleSheetManager sheet={sheet.instance}>
        <App request={request} />
      </StyleSheetManager>
    );
  } else {
    return <App />;
  }
};

StyledBody.propTypes = {
  ...App.propTypes,
  sheet: PropTypes.object
};

export default StyledBody;
