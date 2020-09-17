import React from 'react';
import {RedocStandalone} from 'redoc';
import './Redocusaurus.css';

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

const Redocusaurus = (props) => {
  return (
    <div className="redocusaurus">
      <RedocStandalone
        specUrl={props.spec}
        options={{
          scrollYOffset: 'nav',
          hideDownloadButton: true,
          requiredPropsFirst: true,
          hideSchemaTitles: true,
          disableSearch: true,
          jsonSampleExpandLevel: 1,
          theme
        }}
      />
    </div>
  );
};

export default Redocusaurus;
