import React from 'react';

export const ContactSupport = ({children}) => (
  <a
    href="mailto:support@monei.net"
    onClick={(e) => {
      if (!drift) return;
      e.preventDefault();
      drift.api.openChat();
    }}>
    {children}
  </a>
);
