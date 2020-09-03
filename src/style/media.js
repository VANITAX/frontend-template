// media.js
import { css } from "styled-components";

import {
  breakpoint,
  mobileAspectRatioWidth,
  mobileAspectRatioHeight
} from "../style/variables.js";

const SIZE = {
  tablet: breakpoint.tablet,
  mobile: breakpoint.mobile
};

const media = Object.keys(SIZE).reduce((acc, key) => {
  return {
    ...acc,
    [key]: (...args) => css`
      @media (max-width: ${SIZE[key]}px) {
        ${css(...args)}
      }
    `
  };
}, {});

export default media;

/**
 * use iPhone 5/SE aspect ratio to determine device is mobile or not.
 */
export const mobileAspectRatio = (...args) => css`
  @media (orientation: portrait) and (max-aspect-ratio: ${mobileAspectRatioWidth}/${mobileAspectRatioHeight}),
(orientation: landscape) and (min-aspect-ratio: ${mobileAspectRatioHeight}/${mobileAspectRatioWidth}) and (max-width: ${
  breakpoint.tablet
}px) {
    ${css(...args)}
  }
`;
