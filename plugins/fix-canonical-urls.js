/* fix-canonical-urls: Fix Docusaurus trailingSlash hydration bug causing double slashes */
module.exports = function (context, options) {
  return {
    name: 'fix-canonical-urls',
    injectHtmlTags() {
      return {
        postBodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              (function() {
                // Fix Docusaurus trailingSlash: true hydration bug that causes double slashes
                function fixUrls() {
                  // Fix canonical URLs - remove double slashes
                  const canonicalLink = document.querySelector('link[rel="canonical"]');
                  if (canonicalLink && canonicalLink.href) {
                    // Remove double slashes (except after protocol)
                    const fixedUrl = canonicalLink.href.replace(/([^:])(\\/\\/+)/g, '$1/');
                    if (fixedUrl !== canonicalLink.href) {
                      canonicalLink.href = fixedUrl;
                    }
                  }
                  
                  // Fix alternate links
                  const alternateLinks = document.querySelectorAll('link[rel="alternate"]');
                  alternateLinks.forEach(link => {
                    if (link.href) {
                      const fixedUrl = link.href.replace(/([^:])(\\/\\/+)/g, '$1/');
                      if (fixedUrl !== link.href) {
                        link.href = fixedUrl;
                      }
                    }
                  });
                  
                  // Fix favicon URL - remove trailing slash from file URLs
                  const favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
                  if (favicon && favicon.href) {
                    // Remove trailing slash from icon files (e.g., icon.png/ -> icon.png)
                    if (/\\.(png|jpg|jpeg|ico|svg)\\/$/.test(favicon.href)) {
                      favicon.href = favicon.href.replace(/\\/$/, '');
                    }
                  }
                }
                
                // Run immediately if DOM is ready
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', fixUrls);
                } else {
                  fixUrls();
                }
                
                // Run after full page load (catches hydration issues)
                window.addEventListener('load', fixUrls);
                
                // Use MutationObserver to catch dynamic updates during hydration
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'childList' && mutation.target.nodeName === 'HEAD') {
                      fixUrls();
                    }
                  });
                });
                
                if (document.head) {
                  observer.observe(document.head, { childList: true, subtree: true });
                }
              })();
            `
          }
        ]
      };
    }
  };
};
