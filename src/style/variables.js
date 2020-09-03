// variables.js
export const footerNavigationHeight = 48;
export const iPhoneXSeriesFooterPaddingInPWA = 34;
export const headerHeight = 64;
export const color = {
  black: "#191919",
  white: "#ffffff",
  grey: {
    "100": "#F6F6F6",
    "300": "#C8C8C8",
    "500": "#9B9B9B",
    "700": "#646464",
    "900": "#232323"
  },
  tealBlue: "#00d2be",
  peach: "#FF7878",
  sky: "#60c4e8",
  yellow: "#FFD100",
  green: "#83CC38",
  lime: "#82ff8c",
  red: "#cf0404",
  purple: "#877DF5"
};
export const textColor = {
  black: color.grey["700"],
  white: color.white,
  grey: color.grey["300"],
  primary: color.tealBlue,
  secondary: color.sky,
  danger: color.red,
  success: color.lime
};

export const breakpoint = {
  tablet: 1024,
  mobile: 768
};

export const modalBackgroundOpacity = 0.4;
export const loadingIconOpacity = 0.6;

export const mobileAspectRatioWidth = 320;
export const mobileAspectRatioHeight = 454;

export const flixRowAutoPlayWidth = 520;

export const showcasePlayerMobileHeight = 180;
export const showcaseInfoMobileHeight = 96;
export const showcaseMobileWidth = 320;
export const showcaseMobileHeight =
  showcasePlayerMobileHeight + showcaseInfoMobileHeight;
export const showcasePlayerDesktopHeight = 396;
export const showcaseInfoDesktopHeight = 126;
export const showcaseDesktopWidth = 704;
export const showcaseDesktopHeight =
  showcasePlayerDesktopHeight + showcaseInfoDesktopHeight;
// each side of item gap is 6px, the total of item gap is 12px.
export const showcaseItemGap = 12;
// each side of container is 6px, the total of container is 12px.
export const showcaseContainerGap = 12;
export const showcaseMobileMinimumItemAmount = 3;
export const showcaseDesktopMinimumItemAmount = 5;
export const showcaseSwipeTransitionSeconds = 0.6;

export const popupNotificationTopAndBottomMaximumWidth = 480;
export const popupNotificationTopAndBottomMaximumWidthInDesktop = 360;
export const popupNotificationTopAndBottomHeight = 52;
export const popupNotificationTopAndBottomHorizontalPadding = 8;
export const popupNotificationCenterMaximumWidthInPortrait = 400;
export const popupNotificationCenterMaximumHeightInLandscape = 360;
export const popupNotificationCenterHorizontalPaddingInPortrait = 24;
export const popupNotificationCenterVerticalPaddingInLandscape = 24;
export const popupNotificationCenterCloseButtonHeight = 40;
export const popupNotificationCenterContentHeightRatioInPortrait = 1.4678;
export const popupNotificationCenterContentWidthRatioInLandscape = 1.8118;

export const chatBannerMaximumWidth = 359;
export const chatBannerMaximumHeight = 52;

export const freeZoneFlixCardWidth = 280;
export const freeZoneFlixCardColumnGap = 12;
export const freeZoneFlixCardPadding = 16;
