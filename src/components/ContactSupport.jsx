import React from "react";

export const ContactSupport = ({ children }) => {
  const handleClick = (e) => {
    const zE = window.zE;
    if (!zE) return;
    e.preventDefault();
    try {
      zE("webWidget", "updateSettings", {
        webWidget: {
          chat: {
            suppress: true
          },
          helpCenter: {
            suppress: true
          },
          talk: {
            suppress: true
          },
          answerBot: {
            suppress: true
          },
          contactForm: {
            suppress: false,
            ticketForms: [
              {
                id: 360000322338,
                title: false
              }
            ]
          }
        }
      });
      zE.activate();
      zE("webWidget:on", "close", () => {
        zE("webWidget", "updateSettings", {
          webWidget: {
            chat: {
              suppress: false
            },
            helpCenter: {
              suppress: false
            },
            talk: {
              suppress: false
            },
            answerBot: {
              suppress: false
            },
            contactForm: {
              suppress: false,
              ticketForms: [
                {
                  id: 360000322338,
                  title: false
                }
              ]
            }
          }
        });
      });
    } catch (error) {
      console.error(error);
      window.location.href = "https://support.monei.com/hc/requests/new";
    }
  };

  return (
    <a href="https://support.monei.com/hc/requests/new" onClick={handleClick}>
      {children}
    </a>
  );
};
