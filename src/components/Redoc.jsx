import React from 'react';
import {RedocStandalone} from 'redoc';
import './Redoc.css';

let theme = {
  colors: {
    primary: {
      main: '#8961a5'
    }
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSys temFont, "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu", sans-serif',
    fontSize: '15px',
    headings: {
      fontFamily:
        '-apple-system, BlinkMacSys temFont, "Segoe UI", "Roboto", "Helvetica Neue", "Ubuntu", sans-serif',
      fontSize: '15px'
    },
    code: {
      fontSize: '14px',
      color: 'rgb(28, 30, 33)'
    }
  },
  sidebar: {
    backgroundColor: '#ffffff'
  },
  rightPanel: {
    backgroundColor: '#303846'
  }
};

const Redoc = (props) => {
  return (
    <RedocStandalone
      spec={props.spec}
      options={{
        hideLoading: true,
        scrollYOffset: 'nav',
        hideDownloadButton: false,
        requiredPropsFirst: true,
        hideSchemaTitles: true,
        nativeScrollbars: true,
        onlyRequiredInSamples: true,
        disableSearch: true,
        jsonSampleExpandLevel: 1,
        theme
      }}
    />
  );
};

export default Redoc;
