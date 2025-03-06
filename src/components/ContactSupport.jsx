import React from 'react';

export const ContactSupport = ({children}) => {
  const handleClick = (e) => {
    const zE = window.zE;
    if (!zE) return;
    e.preventDefault();
    try {
      zE('messenger', 'open');
    } catch (error) {
      console.error(error);
      window.location.href = 'https://support.monei.com/hc/requests/new';
    }
  };

  return (
    <a href="https://support.monei.com/hc/requests/new" onClick={handleClick}>
      {children}
    </a>
  );
};
