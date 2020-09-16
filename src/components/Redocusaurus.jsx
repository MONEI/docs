import React from 'react';
import merge from 'lodash.merge';
import {RedocStandalone} from 'redoc';
import useThemeContext from '@theme/hooks/useThemeContext';
import './Redocusaurus.css';

/**
 * NOTE: Colors taken from `node_modules/infima/styles/common/dark-mode.css`
 * and related files
 */
const DOCUSAURUS = {
  fontFamily:
    '-apple-system, BlinkMacSys temFont, "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu", sans-serif',
  fontSize: '15px',
  darkGray: '#303846',
  dark: {
    primaryText: '#f5f6f7',
    secondaryText: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgb(24, 25, 26)'
  }
};

let LIGHT_THEME_OPTIONS = {
  typography: {
    fontFamily: DOCUSAURUS.fontFamily,
    fontSize: DOCUSAURUS.fontSize,
    headings: {
      fontFamily: DOCUSAURUS.fontFamily,
      fontSize: DOCUSAURUS.fontSize
    }
  },
  sidebar: {
    backgroundColor: '#ffffff'
  },
  rightPanel: {
    backgroundColor: DOCUSAURUS.darkGray
  }
};

let DARK_THEME_OPTIONS = {
  colors: {
    text: {
      primary: DOCUSAURUS.dark.primaryText,
      secondary: DOCUSAURUS.dark.secondaryText
    },
    gray: {
      50: '#FAFAFA',
      100: '#F5F5F5'
    },
    border: {
      dark: '#ffffff',
      light: 'rgba(0,0,0, 0.1)'
    }
  },
  schema: {
    nestedBackground: DOCUSAURUS.dark.backgroundColor,
    typeNameColor: DOCUSAURUS.dark.secondaryText,
    typeTitleColor: DOCUSAURUS.dark.secondaryText
  },
  sidebar: {
    backgroundColor: DOCUSAURUS.dark.backgroundColor,
    textColor: DOCUSAURUS.dark.primaryText,
    arrow: {
      color: DOCUSAURUS.dark.primaryText
    }
  }
};

function getThemeOptions(isDarkMode) {
  let baseTheme = {
    colors: {
      primary: {
        main: '#8961a5'
      }
    },
    typography: {
      code: {
        fontSize: '14px',
        color: 'rgb(28, 30, 33)'
      }
    }
  };
  baseTheme = merge(baseTheme, LIGHT_THEME_OPTIONS);

  if (!isDarkMode) return baseTheme;

  return merge({}, baseTheme, DARK_THEME_OPTIONS);
}

const Redocusaurus = (props) => {
  const {isDarkTheme} = useThemeContext();
  const theme = getThemeOptions(isDarkTheme);

  return (
    <div className="redocusaurus">
      <RedocStandalone
        specUrl={props.spec}
        options={{
          scrollYOffset: 'nav',
          hideDownloadButton: true,
          requiredPropsFirst: true,
          hideSchemaTitles: true,
          jsonSampleExpandLevel: 1,
          theme
        }}
      />
    </div>
  );
};

export default Redocusaurus;
